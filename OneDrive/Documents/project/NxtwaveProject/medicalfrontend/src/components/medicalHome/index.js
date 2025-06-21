import { Component } from "react";
import Cookie from "js-cookie";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  HealthImg,
  HealthHeading,
  HealthDescription,
  RoleWrapper,
  Role,
  RoleHeading,
  RoleUser,
  RoleDis,
  Rolelist,
  RoleListItem,
  RoleButton,
  MsgPara,
  LogoutButton,
} from "./styledComponents.js";
import { AiOutlineUser } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";

class Home extends Component {
  logout = () => {
    Cookie.remove("jwt_token");
    const { history } = this.props;
    history.replace("/login");
  };

  render() {
    return (
      <HomeContainer>
        <LogoutButton onClick={this.logout}>Logout</LogoutButton>
        <HealthImg
          src="https://cdn-icons-png.flaticon.com/512/10636/10636778.png"
          alt="health img"
        />
        <HealthHeading>Welcome to MediCare Comparison</HealthHeading>
        <HealthDescription>
          Your trusted partner in medication management. Choose your role to get
          started with personalized features.
        </HealthDescription>
        <RoleWrapper>
          <Role type="patient">
            <RoleUser type="patient">
              {" "}
              <AiOutlineUser />
            </RoleUser>
            <RoleHeading type="patient">I'm a Patient</RoleHeading>
            <RoleDis>
              Track your medication schedule and maintain your health records
            </RoleDis>
            <Rolelist type="patient">
              <RoleListItem type="patient">
                Mark medications as taken
              </RoleListItem>
              <RoleListItem type="patient">
                Upload proof photos (optional)
              </RoleListItem>
              <RoleListItem type="patient">
                View your medication calendar
              </RoleListItem>
              <RoleListItem type="patient">
                Large, easy-to-use interface
              </RoleListItem>
            </Rolelist>
            <Link to="/patient" style={{ textDecoration: "none" }}>
              <RoleButton type="patient">Continue as Patient</RoleButton>
            </Link>
          </Role>
          <Role>
            <RoleUser>
              {" "}
              <LuUsers />
            </RoleUser>
            <RoleHeading>I'm a Caretaker</RoleHeading>
            <RoleDis>
              Monitor and support your loved one's medication adherence
            </RoleDis>
            <Rolelist>
              <RoleListItem>Monitor medication compliance</RoleListItem>
              <RoleListItem>Set up notification preferences</RoleListItem>
              <RoleListItem>View detailed reports</RoleListItem>
              <RoleListItem>Receive email alerts</RoleListItem>
            </Rolelist>
            <Link to="/caretaker" style={{ textDecoration: "none" }}>
              <RoleButton>Continue as CareTaker</RoleButton>
            </Link>
          </Role>
        </RoleWrapper>
        <MsgPara> You can switch between roles anytime after setup</MsgPara>
      </HomeContainer>
    );
  }
}

export default Home;
