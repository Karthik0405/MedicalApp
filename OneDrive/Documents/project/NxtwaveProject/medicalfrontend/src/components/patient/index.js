import { Component } from "react";
import Header from "../headers";
import PatientDashboard from "../patientDashboard";
class Patient extends Component {
  onSwitch = () => {
    const { history } = this.props;
    history.replace("/caretaker");
  };
  render() {
    return (
      <>
        <Header role="Patient" onSwitch={this.onSwitch} />
        <PatientDashboard />
      </>
    );
  }
}

export default Patient;
