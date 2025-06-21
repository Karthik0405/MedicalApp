import styled from "styled-components";

export const ActivityContainer = styled.div`
  width: 78vw;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

export const ActivityTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ActivityItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  boder: 1px solid #e5e7eb;
  padding: 14px 20px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DayLabel = styled.p`
  font-weight: 600;
  color: #1d4ed8;
  margin: 0;
`;

export const TimeLabel = styled.p`
  font-size: 14px;
  color: #555;
  margin: 4px 0 0;
`;

export const Status = styled.span`
  background-color: rgb(223, 238, 223);
  color: rgb(41, 49, 41);
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const StatusMissed = styled.span`
  background-color: #d12d2d;
  color: #ffe6e6;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 600;
`;

export const PhotoTag = styled.span`
  display: flex;
  align-items: center;
  background-color: #f3f4f6;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 13px;
  margin-right: 10px;
`;

export const TickContainer = styled.div`
  font-size: 24px;
  color: ${(props) => (props.status === "Missed" ? "#d12d2d" : "#1b9e1b")};
  background-color: ${(props) =>
    props.status === "Missed" ? "#FF7F7F" : "#e0fce0"};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

export const PhotoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const DateDiv = styled.div`
  margin-left: 16px;
  flex-grow: 1;
`;
