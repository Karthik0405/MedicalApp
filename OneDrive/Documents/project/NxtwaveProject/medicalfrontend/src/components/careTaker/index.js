import { Component } from "react";
import Header from "../headers";
import DashboardTabs from "../dashboardCard";
import TabNavigation from "../TabNavigation";
import { CaretakerContainer } from "./styledComponents";
class Caretaker extends Component {
  onSwitch = () => {
    const { history } = this.props;
    history.replace("/patient");
  };
  render() {
    return (
      <>
        <Header onSwitch={this.onSwitch} />
        <CaretakerContainer>
          <DashboardTabs />
          <TabNavigation />
        </CaretakerContainer>
      </>
    );
  }
}

export default Caretaker;
