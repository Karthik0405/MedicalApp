import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  flex-direction: center;
`;

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  flex: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const StatusText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const PendingTag = styled.span`
  background: #ef4444;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  padding: 4px 10px;
`;

export const TimeText = styled.div`
  color: #475569;
  font-size: 14px;
`;

export const QuickActionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ActionItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f9fafb;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #e2e8f0;
  }
`;

export const ProgressWrapper = styled.div`
  margin: 10px 0;
`;

export const ProgressTrack = styled.div`
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.width || "0%"};
  background-color: #0f172a;
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const StatText = styled.div`
  text-align: center;
  font-size: 14px;
`;

export const StatTaken = styled(StatText)`
  color: #22c55e;
`;

export const StatMissed = styled(StatText)`
  color: #ef4444;
`;

export const StatRemaining = styled(StatText)`
  color: #3b82f6;
`;

export const InnerCard = styled.div`
  display: flex;
  gap: 20px;
  marginbottom: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
