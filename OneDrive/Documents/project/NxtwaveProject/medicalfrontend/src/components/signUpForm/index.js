import React, { Component } from "react";
import {
  Container,
  Title,
  Input,
  Select,
  Button,
  ErrorText,
  Popup,
  ImageWrapper,
  TopImage,
  SignupFormWrapper,
} from "./styledComponents";

class SignupForm extends Component {
  state = {
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
    role: "",
    errorMsg: "",
    showPopup: false,
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorMsg: "",
      showPopup: false,
    });
  };

  handleSignup = async () => {
    const { username, email, confirmEmail, password, role } = this.state;

    if (!email) {
      this.setState({ errorMsg: "Email is required" });
      return;
    }

    if (!role) {
      this.setState({ errorMsg: "Role must be selected" });
      return;
    }

    if (email !== confirmEmail) {
      this.setState({ errorMsg: "Emails do not match" });
      return;
    }

    if (password.length < 8) {
      this.setState({ errorMsg: "Password must be at least 8 characters" });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role }),
      });

      if (response.ok) {
        this.setState({
          username: "",
          email: "",
          confirmEmail: "",
          password: "",
          role: "",
          errorMsg: "",
          showPopup: true,
        });
      } else {
        const errorText = await response.text();
        this.setState({ errorMsg: errorText });
      }
    } catch (err) {
      this.setState({ errorMsg: "Server error. Please try again later." });
    }
  };

  render() {
    const {
      username,
      email,
      confirmEmail,
      password,
      role,
      errorMsg,
      showPopup,
    } = this.state;

    return (
      <SignupFormWrapper>
        <Container>
          <ImageWrapper>
            <TopImage
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Registration"
            />
          </ImageWrapper>

          <Title>Signup Form</Title>

          <Input
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={this.handleInputChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={this.handleInputChange}
          />

          <Input
            type="email"
            name="confirmEmail"
            placeholder="Confirm email"
            value={confirmEmail}
            onChange={this.handleInputChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={this.handleInputChange}
          />

          <Select name="role" value={role} onChange={this.handleInputChange}>
            <option value="">Select Role</option>
            <option value="patient">patient</option>
            <option value="caretaker">CareTaker</option>
          </Select>

          {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

          <Button onClick={this.handleSignup}>Register</Button>

          {showPopup && <Popup>User is Registered ✅</Popup>}
        </Container>
      </SignupFormWrapper>
    );
  }
}

export default SignupForm;
