import styled from "styled-components";

// Layout
export const BackgroundDiv = styled.div`
  background: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

// Dashboard
export const DashboardContainer = styled.div`
  background: linear-gradient(90deg, #3b82f6 0%, #22c55e 100%);
  border-radius: 24px;
  padding: 32px 24px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UserIcon = styled.div`
  background: #60a5fa;
  border-radius: 12px;
  padding: 16px;
  font-size: 32px;
  color: #fff;
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GreetingTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

export const GreetingSubtitle = styled.span`
  color: #e0f2fe;
  font-size: 1.1rem;
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StatCard = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 24px 18px;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const StatValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StatLabel = styled.span`
  font-size: 1rem;
  opacity: 0.9;
`;

// Main layout
export const MainContent = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  width: 84vw;
  padding: 32px 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  min-width: 320px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(16, 30, 54, 0.06);
  padding: 28px 24px;
  flex: 2;
  min-width: 400px;
  @media (max-width: 768px) {
    width: 50vw;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

// Medication Set
export const MedSet = styled.div`
  display: flex;
  align-items: center;
  background: #f8fafc;
  border-radius: 8px;
  padding: 16px 18px;
  gap: 16px;
`;

export const MedNumber = styled.div`
  background: #e0edff;
  color: #2563eb;
  font-weight: 700;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MedInfo = styled.div`
  flex: 1;
`;

export const MedTime = styled.div`
  color: #64748b;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 4px;
`;

// Success / Completed Styles
export const SuccessBox = styled.div`
  border: 1px solid #22c55e;
  background-color: #ecfdf5;
  padding: 30px 20px;
  border-radius: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

export const SuccessIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background-color: #22c55e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SuccessIcon = styled.span`
  font-size: 40px;
  color: #fff;
`;

export const SuccessTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #166534;
  margin-bottom: 6px;
`;

export const SuccessSubtext = styled.div`
  color: #15803d;
`;

export const GreenMedCard = styled.div`
  background-color: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: 10px;
  padding: 16px 18px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GreenMedLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const GreenCheckCircle = styled.div`
  background-color: #22c55e;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
`;

export const GreenMedInfo = styled.div`
  div:first-child {
    font-weight: bold;
    color: #15803d;
  }
  div:last-child {
    font-size: 14px;
    color: #166534;
  }
`;

export const GreenTimeLabel = styled.div`
  background-color: #bbf7d0;
  border-radius: 16px;
  padding: 4px 12px;
  color: #166534;
  font-weight: 600;
  font-size: 14px;
`;

// Photo Proof
export const ProofBox = styled.div`
  border: 2px dashed #dbeafe;
  border-radius: 12px;
  background: #f8fafc;
  padding: 32px 0;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ProofIcon = styled.div`
  color: #64748b;
  font-size: 2.2rem;
  margin-bottom: 8px;
`;

export const ProofText = styled.div`
  font-weight: 500;
  color: #334155;
`;

export const ProofSub = styled.div`
  color: #64748b;
  font-size: 0.98rem;
  margin-bottom: 16px;
`;

export const TakePhotoBtn = styled.button`
  background: #fff;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  color: #1e293b;
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

// Mark Button
export const MarkBtn = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background: #16a34a;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FutureWarning = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #22c55e;
  background-color: #ecfdf5;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 20px;
  color: #166534;
`;

export const FutureWarningText = styled.p`
  color: #64748b;
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
`;

export const CalendarCard = styled(Card)`
  flex: 1;
  min-width: 320px;
  padding: 20px 18px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarTitle = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: #1e293b;
`;

export const CalendarNavBtn = styled.button`
  background: none;
  border: none;
  color: #64748b;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

export const CalendarDay = styled.div`
  text-align: center;
  font-size: 0.98rem;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const CalendarCell = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ status }) =>
    status === "selected"
      ? "#2563eb"
      : status === "today"
      ? "#f1f5f9"
      : status === "taken"
      ? "#22c55e"
      : status === "missed"
      ? "#fca5a5"
      : "transparent"};
  color: ${({ status }) =>
    status === "selected" || status === "missed" ? "#fff" : "#1e293b"};
  font-weight: ${({ status }) => (status ? 600 : 400)};
  cursor: pointer;
  transition: background 0.2s ease;
  position: relative;
  &:hover {
    background: #f1f5f9;
    color: #1e293b;
  }
`;

export const Legend = styled.div`
  margin-top: 20px;
  font-size: 0.98rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
`;

export const LegendDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;
export const Tick = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 10px;
  color: white;
  font-weight: bold;
`;
export const Dot = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 6px;
  height: 6px;
  background-color: red;
  border-radius: 50%;
`;
