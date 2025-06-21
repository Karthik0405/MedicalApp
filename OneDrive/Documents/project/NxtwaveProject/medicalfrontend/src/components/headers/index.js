import { withRouter } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  LogoIcon,
  TitleText,
  SubtitleText,
  RoleSwitchButton,
  SwitchIcon,
} from "./styledComponents";
import { LuUsers } from "react-icons/lu";
import { FiUser } from "react-icons/fi";

const Header = (props) => {
  const { role, onSwitch } = props;
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoIcon>M</LogoIcon>
        <div>
          <TitleText>MediCare Companion</TitleText>
          <SubtitleText>
            {role === "Patient" ? "Patient" : "Caretaker"} View
          </SubtitleText>
        </div>
      </LogoContainer>
      <RoleSwitchButton onClick={onSwitch}>
        <SwitchIcon>{role === "Patient" ? <LuUsers /> : <FiUser />}</SwitchIcon>
        Switch to {role === "Patient" ? "Caretaker" : "Patient"}
      </RoleSwitchButton>
    </HeaderContainer>
  );
};

export default withRouter(Header);
