import styled from "styled-components";

export const DashboardContainer = styled.div`
  background: linear-gradient(90deg, #22c55e 0%, #2563eb 100%);
  border-radius: 24px;
  padding: 32px 24px;
  margin: 24px auto;
  max-width: 1200px;
  color: #fff;
`;

export const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const IconWrapper = styled.div`
  background: rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 16px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashboardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

export const DashboardSubtitle = styled.p`
  font-size: 1.1rem;
  margin: 8px 0 0 0;
  opacity: 0.9;
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 28px 32px;
  min-width: 200px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StatValue = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const StatLabel = styled.div`
  font-size: 1.05rem;
  opacity: 0.92;
`;
