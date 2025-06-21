// DashboardTabs.styled.js
import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 76vw;
  padding: 20px;
`;

export const TabHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f8;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  background: ${(props) => (props.isActive ? "white" : "transparent")};
  border: none;
  color: ${(props) => (props.isActive ? "#0f172a" : "#64748b")};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`;

export const ContentArea = styled.div`
  border-radius: 12px;
  padding: 20px;
`;

export const ActiveTab = styled.div`
  padding: 10px;
`;
