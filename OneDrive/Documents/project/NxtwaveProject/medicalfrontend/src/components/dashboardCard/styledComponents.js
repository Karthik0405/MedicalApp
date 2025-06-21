import styled from "styled-components";

export const DashboardContainer = styled.div`
  background: linear-gradient(90deg, #1cb56d, #3f80ff);
  color: white;
  padding: 24px;
  border-radius: 16px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashboardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const DashboardSubtitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: #e2e8f0;
`;

export const StatsWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const StatCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 16px 20px;
  border-radius: 12px;
  flex: 1;
  min-width: 150px;
`;

export const StatNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #e2e8f0;
`;
export const CaretakerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const CaretakerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
