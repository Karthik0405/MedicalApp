import React from "react";
import {
  DashboardContainer,
  DashboardHeader,
  DashboardTitle,
  DashboardSubtitle,
  StatsRow,
  StatCard,
  StatValue,
  StatLabel,
  IconWrapper,
} from "./styledComponents";
import { FaUserNurse } from "react-icons/fa";

const DashBoardStats = () => (
  <DashboardContainer>
    <DashboardHeader>
      <IconWrapper>
        <FaUserNurse size={32} color="#fff" />
      </IconWrapper>
      <div>
        <DashboardTitle>Caretaker Dashboard</DashboardTitle>
        <DashboardSubtitle>
          Monitoring Eleanor Thompson's medication adherence
        </DashboardSubtitle>
      </div>
    </DashboardHeader>
    <StatsRow>
      <StatCard>
        <StatValue>85%</StatValue>
        <StatLabel>Adherence Rate</StatLabel>
      </StatCard>
      <StatCard>
        <StatValue>5</StatValue>
        <StatLabel>Current Streak</StatLabel>
      </StatCard>
      <StatCard>
        <StatValue>3</StatValue>
        <StatLabel>Missed This Month</StatLabel>
      </StatCard>
      <StatCard>
        <StatValue>4</StatValue>
        <StatLabel>Taken This Week</StatLabel>
      </StatCard>
    </StatsRow>
  </DashboardContainer>
);

export default DashBoardStats;
