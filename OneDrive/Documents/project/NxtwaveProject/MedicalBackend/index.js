const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "medication.db");
let db = null;

// Initialize DB (without table creation)
const initializeDatabase = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () => {
      console.log("✅ Server running at http://localhost:3000");
    });
  } catch (error) {
    console.error("❌ DB Error:", error);
    process.exit(1);
  }
};
initializeDatabase();

// Middleware to check JWT
const authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  if (!authHeader) return response.status(401).send("Missing token");

  const token = authHeader.split(" ")[1];
  if (!token) return response.status(401).send("Invalid token");

  jwt.verify(token, "MY_SECRET_TOKEN", (error, payload) => {
    if (error) return response.status(403).send("Invalid access");
    request.username = payload.username;
    next();
  });
};

// Register
app.post("/register", async (request, response) => {
  const { username, email, password, role } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const userExists = await db.get(`SELECT * FROM users WHERE name = ?`, [
    username,
  ]);

  if (userExists) {
    response.status(400).send("User already exists");
  } else if (password.length < 5) {
    response.status(400).send("Password is too short");
  } else {
    await db.run(
      `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`,
      [username, email, hashedPassword, role]
    );
    response.send("User created successfully");
  }
});

// Login
app.post("/login", async (request, response) => {
  const { username, password } = request.body;
  const user = await db.get(`SELECT * FROM users WHERE name = ?`, [username]);

  if (!user) {
    const errorMsg = { msg: "Please Enter Valid Name and Password" };
    return response.status(400).send(JSON.stringify(errorMsg));
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid)
    return response
      .status(400)
      .send(JSON.stringify({ msg: "Please Enter Valid Name and Password" }));

  const token = jwt.sign({ username }, "MY_SECRET_TOKEN");
  response.send({ jwtToken: token });
});

// Mark Medication
app.post("/mark-medication", authenticateToken, async (request, response) => {
  const { date } = request.body;
  const { username } = request;

  const alreadyMarked = await db.get(
    `SELECT * FROM medic WHERE username = ? AND date = ?`,
    [username, date]
  );

  if (!alreadyMarked) {
    await db.run(
      `INSERT INTO medic (username, date, status) VALUES (?, ?, 'taken')`,
      [username, date]
    );
    response.send("Medication marked as taken");
  } else {
    response.status(400).send("Already marked for this date");
  }
});

// Get Medication History
app.get(
  "/medication-history/:username/",
  authenticateToken,
  async (request, response) => {
    const { username } = request.params;
    const rows = await db.all(
      `SELECT date FROM medic WHERE username = ? AND status = 'taken' ORDER BY date `,
      [username]
    );
    response.send(rows);
  }
);

app.post(
  "/medication-history/",
  authenticateToken,
  async (request, response) => {
    const { username, date, imageUrl } = request.body;
    console.log("Received data:", request.body);
    const alreadyMarked = await db.get(
      `SELECT * FROM medic WHERE username = ? AND date = ?`,
      [username, date]
    );

    if (!alreadyMarked) {
      await db.run(
        `INSERT INTO medic (username, date, status,image_url) VALUES (?, ?, 'taken', ?)`,
        [username, date, imageUrl]
      );
      response.send("Medication marked as taken");
    } else {
      response.status(400).send("Already marked for this date");
    }
  }
);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/user-email/:username", authenticateToken, async (req, res) => {
  const { username } = req.params;
  const user = await db.get(`SELECT email FROM users WHERE name = ?`, [
    username,
  ]);
  if (user) {
    res.json([{ email: user.email }]);
  } else {
    res.status(404).send("User not found");
  }
});

module.exports = app;
