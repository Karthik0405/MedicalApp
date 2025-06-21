// CaretakerDashboard.js
import React from "react";
import {
  DashboardContainer,
  DashboardHeader,
  DashboardTitle,
  DashboardSubtitle,
  StatsWrapper,
  StatCard,
  StatNumber,
  StatLabel,
  IconContainer,
} from "./styledComponents";
import { FiUser } from "react-icons/fi";

const DashboardCard = () => {
  const username = localStorage.getItem("username");
  return (
    <DashboardContainer>
      <DashboardHeader>
        <IconContainer>
          <FiUser size={24} />
        </IconContainer>
        <div>
          <DashboardTitle>Caretaker Dashboard</DashboardTitle>
          <DashboardSubtitle>
            Monitoring {username} medication adherence
          </DashboardSubtitle>
        </div>
      </DashboardHeader>
      <StatsWrapper>
        <StatCard>
          <StatNumber>85%</StatNumber>
          <StatLabel>Adherence Rate</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>5</StatNumber>
          <StatLabel>Current Streak</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>3</StatNumber>
          <StatLabel>Missed This Month</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>4</StatNumber>
          <StatLabel>Taken This Week</StatLabel>
        </StatCard>
      </StatsWrapper>
    </DashboardContainer>
  );
};

export default DashboardCard;
