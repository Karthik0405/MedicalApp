// DashboardTabs.js
import React, { Component } from "react";
import {
  TabContainer,
  TabHeader,
  TabButton,
  ContentArea,
  ActiveTab,
} from "./styledComponets";

import OverviewDashboard from "../overviewDashBoard";
import RecentActivity from "../recentActivities";
import CalendarView from "../calenderView";
import Notifications from "../notifications";
class TabNavigation extends Component {
  state = {
    activeTab: "overview",
  };

  setTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  renderContent = () => {
    const { activeTab } = this.state;

    switch (activeTab) {
      case "overview":
        return <OverviewDashboard onChangeTab={this.setTab} />;
      case "recent":
        return <RecentActivity />;
      case "calendar":
        return <CalendarView />;
      case "notifications":
        return <Notifications />;
      default:
        return null;
    }
  };

  render() {
    const { activeTab } = this.state;

    return (
      <TabContainer>
        <TabHeader>
          <TabButton
            isActive={activeTab === "overview"}
            onClick={() => this.setTab("overview")}
          >
            Overview
          </TabButton>
          <TabButton
            isActive={activeTab === "recent"}
            onClick={() => this.setTab("recent")}
          >
            Recent Activity
          </TabButton>
          <TabButton
            isActive={activeTab === "calendar"}
            onClick={() => this.setTab("calendar")}
          >
            Calendar View
          </TabButton>
          <TabButton
            isActive={activeTab === "notifications"}
            onClick={() => this.setTab("notifications")}
          >
            Notifications
          </TabButton>
        </TabHeader>

        <ContentArea>
          <ActiveTab>{this.renderContent()}</ActiveTab>
        </ContentArea>
      </TabContainer>
    );
  }
}

export default TabNavigation;
