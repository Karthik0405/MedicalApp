// HomeStyles.js or inside Home.js
import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: lightcyan;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    padding-top: 0px;
    padding: 30px;
  }
`;

export const HealthImg = styled.img`
  height: 100px;
  width: 100px;
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;

export const HealthHeading = styled.h1`
  font-size: 36px;
  margin-bottom: 0px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 26px;
    font-weight: 600;
    text-align: center;
  }
`;

export const HealthDescription = styled.p`
  text-align: center;
  font-size: 20px;
  max-width: 650px;
  font-weight: 400;
  color: cadetblue;
  margin-top: 10px;
  color: #64748b;
`;
export const RoleWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    display-flex;
    flex-direction: row;
  }
`;

export const Role = styled.div`
  background-color: #ffffff;
  cursor: pointer;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  &:hover {
    border-color: ${(props) =>
      props.type === "patient" ? "lightblue" : "lightgreen"};
    box-shadow: 0 0 2px;
  }
`;

export const RoleUser = styled.div`
  font-size: 30px;
  background-color: ${(props) =>
    props.type === "patient" ? "#dbeafe" : "#dcfce7"};
  border-radius: 8px;
  padding-top: 15px;
  width: 70px;
  height: 50px;
  diplay: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => (props.type === "patient" ? "#2563eb" : "#16a34a")};
  ${Role}:hover & {
    background-color: ${(props) =>
      props.type === "patient" ? "lightblue" : "lightgreen"};
  }
`;
export const RoleHeading = styled.h1`
  color: ${(props) => (props.type === "patient" ? "#2563eb" : "#16a34a")};
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 0px;
`;
export const RoleDis = styled.p`
  width: 350px;
  text-align: center;
  margin-top: 10px;
  color: #64748b;
`;
export const Rolelist = styled.ul`
  align-self: flex-start;
  padding-left: 20px;
  font-size: 16px;
  color: #64748b;
`;
export const RoleListItem = styled.li`
  &::marker {
    color: ${(props) => (props.type === "patient" ? " #3b82f680" : "#16a34a")};
  }
  margin-bottom: 10px;
`;
export const RoleButton = styled.span`
  background-color: ${(props) =>
    props.type === "patient" ? "#2563eb" : "#16a34a"};
  border-style: none;
  height: 40px;
  width: 90%;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 6px;
  color: #ffffff;'
  font-weight: bold;
  font-size: 36px;
  text-decoration: none;
`;

export const MsgPara = styled.p`
  padding-top: 30px;
  color: #64748b;
`;

export const LogoutButton = styled.button`
  align-self: flex-end;
  margin: 40px;
  background-image: linear-gradient(to right, skyblue, #9acd32);
  border: 1px solid lightgreen;
  border-radius: 5px;
  color: white;
  height: 50px;
  width: 90px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-weight: 600;
`;
