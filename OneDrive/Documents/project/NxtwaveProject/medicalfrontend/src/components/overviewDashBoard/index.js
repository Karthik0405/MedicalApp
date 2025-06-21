import {
  DashboardContainer,
  Card,
  SectionTitle,
  StatusText,
  PendingTag,
  TimeText,
  QuickActionsList,
  ActionItem,
  ProgressWrapper,
  ProgressBar,
  ProgressTrack,
  StatsRow,
  StatTaken,
  StatMissed,
  StatRemaining,
  InnerCard,
} from "./styledComponents";
import { FiMail, FiBell, FiCalendar } from "react-icons/fi";

const OverviewDashboard = ({ onChangeTab = () => {} }) => {
  const handleSendReminder = () => {
    alert("Reminder Email Sent!");
  };

  return (
    <DashboardContainer>
      <InnerCard>
        <Card>
          <SectionTitle>
            <FiCalendar /> Today's Status
          </SectionTitle>
          <StatusText>
            Daily Medication Set
            <PendingTag>Pending</PendingTag>
          </StatusText>
          <TimeText>8:00 AM</TimeText>
        </Card>

        <Card>
          <SectionTitle>Quick Actions</SectionTitle>
          <QuickActionsList>
            <ActionItem onClick={handleSendReminder}>
              <FiMail /> Send Reminder Email
            </ActionItem>
            <ActionItem onClick={() => onChangeTab("notifications")}>
              <FiBell /> Configure Notifications
            </ActionItem>
            <ActionItem onClick={() => onChangeTab("calendar")}>
              <FiCalendar /> View Full Calendar
            </ActionItem>
          </QuickActionsList>
        </Card>
      </InnerCard>

      <Card>
        <SectionTitle>Monthly Adherence Progress</SectionTitle>
        <p>Overall Progress</p>
        <ProgressWrapper>
          <ProgressTrack>
            <ProgressBar width="85%" />
          </ProgressTrack>
          <span style={{ float: "right", fontWeight: 500 }}>85%</span>
        </ProgressWrapper>

        <StatsRow>
          <StatTaken>
            22 days
            <br />
            Taken
          </StatTaken>
          <StatMissed>
            3 days
            <br />
            Missed
          </StatMissed>
          <StatRemaining>
            5 days
            <br />
            Remaining
          </StatRemaining>
        </StatsRow>
      </Card>
    </DashboardContainer>
  );
};

export default OverviewDashboard;
