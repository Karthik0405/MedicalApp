import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
  min-height: 100vh;
  width: 78vw;
  margin: 0 auto;
`;
export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CalendarCard = styled.div`
  margin-left: 20px;
  margin-right: 50px;
  background: #ffffff;
  width: 35%;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const CalendarTitle = styled.h3`
  font-size: 20px;
  color: #1e293b;
`;

export const CalendarNavBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 16px;
`;

export const CalendarDay = styled.div`
  text-align: center;
  font-weight: bold;
  color: #64748b;
`;

export const CalendarCell = styled.div`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  border-radius: 6px;
  background-color: ${({ status }) =>
    status === "selected"
      ? "#2563eb"
      : status === "today"
      ? "#f1f5f9"
      : status === "taken"
      ? "#dcfce7"
      : status === "missed"
      ? "#fee2e2"
      : "transparent"};
  color: ${({ status }) =>
    status === "selected"
      ? "white"
      : status === "taken"
      ? "#15803d"
      : status === "missed"
      ? "#dc2626"
      : "#0f172a"};
  font-weight: ${({ status }) => (status ? "600" : "400")};
  cursor: pointer;

  &:hover {
    background-color: #f1f5f9;
  }
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  margin-top: 10px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #475569;
`;

export const LegendDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-right: 8px;
`;

export const CalendarDetailsBox = styled.div`
  width: 60%;
  margin-top: 24px;
  background-color: #f8fafc;
  padding: 12px;
  border-radius: 8px;
`;

export const CalendarDetailsTitle = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #1e293b;

  svg {
    margin-right: 6px;
  }
`;

export const CalendarDetailsText = styled.div`
  width: 100;
  font-size: 14px;
  color: #475569;
  margin-top: 4px;
`;

export const CalenderHeading = styled.h1`
  font-size: 24px;
  color: #1e293b;
  margin-bottom: 16px;
  align-self: flex-start;
  margin-left: 20px;
`;

export const TakenContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  background-color: lightgreen;
  padding: 10px;
  border-radius: 6px;
  color: #15803d;
  font-weight: bold;
`;
