import { Component } from "react";
import Cookies from "js-cookie";
import { Link, Redirect } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi"; // 👁 Import icons
import {
  LoginContainer,
  LoginImage,
  LoginCard,
  Title,
  Subtitle,
  Label,
  Input,
  Button,
  RegisterText,
  FormControl,
  Form,
  SmallLoginImg,
  ErrorMsg,
  LoginInner,
} from "./styledComponents";

class Login extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
    showPassword: false, // 👁 For toggling password visibility
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "http://localhost:3000/login/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);

    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwtToken);
    } else {
      this.onSubmitFailure(data.msg || "Login failed");
    }
  };

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;
    const { username } = this.state;

    localStorage.setItem("jwtToken", jwtToken);
    localStorage.setItem("username", username);

    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });

    history.replace("/");
  };
  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  render() {
    const { showSubmitError, errorMsg, username, password, showPassword } =
      this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }

    return (
      <LoginContainer>
        <SmallLoginImg src="https://novahhc.com/wp-content/uploads/2023/01/What-Is-Skilled-Nursing-Care-Definition-Types-Helpful-1024x668.jpeg" />
        <LoginCard>
          <LoginImage src="https://novahhc.com/wp-content/uploads/2023/01/What-Is-Skilled-Nursing-Care-Definition-Types-Helpful-1024x668.jpeg" />
          <LoginInner>
            <Form onSubmit={this.submitForm}>
              <Title>Login to MediCare</Title>
              <Subtitle>HI! Please enter your credentials.</Subtitle>
              <FormControl>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </FormControl>
              <FormControl style={{ position: "relative" }}>
                <Label htmlFor="password">Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  onChange={this.onChangePassword}
                  value={password}
                />
                <span
                  onClick={this.toggleShowPassword}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "38px",
                    cursor: "pointer",
                    color: "#888",
                  }}
                >
                  {showPassword ? (
                    <FiEyeOff
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                  ) : (
                    <FiEye style={{ marginRight: "10px", fontSize: "20px" }} />
                  )}
                </span>
              </FormControl>
              <Button type="submit">Sign In</Button>
              {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}{" "}
            </Form>
            <RegisterText>
              Not registered?
              <Link to="/signup">
                <span style={{ color: "#2563eb", fontWeight: "bold" }}>
                  Sign Up
                </span>
              </Link>
            </RegisterText>
          </LoginInner>
        </LoginCard>
      </LoginContainer>
    );
  }
}

export default Login;
