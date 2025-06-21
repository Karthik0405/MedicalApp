import { Component } from "react";
import {
  Container,
  Section,
  SectionTitle,
  ToggleRow,
  ToggleLabel,
  ToggleSwitch,
  InputField,
  Dropdown,
  EmailPreview,
  EmailLine,
  SaveButton,
  EmailiconContainer,
  EmailMesssage,
} from "./styledComponents";
import { MdOutlineMail } from "react-icons/md";

class NotificationsTab extends Component {
  state = {
    emailEnabled: true,
    alertEnabled: true,
    email: "",
    selectedDelay: "2 hours",
    reminderTime: "20:00",
    jwtToken: localStorage.getItem("jwtToken"),
    username: localStorage.getItem("username"),
  };

  componentDidMount() {
    this.fetchEmailFromBackend();
  }

  fetchEmailFromBackend = async () => {
    const { jwtToken, username } = this.state;
    try {
      const res = await fetch(`http://localhost:3000/user-email/${username}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      const data = await res.json();
      this.setState({ email: data[0]["email"] || "" });
    } catch (err) {
      console.error("Failed to fetch email:", err);
    }
  };

  render() {
    const { emailEnabled, alertEnabled, email, selectedDelay, reminderTime } =
      this.state;
    const username = localStorage.getItem("username");
    return (
      <Container>
        <Section>
          <SectionTitle>Notification Preferences</SectionTitle>
          <ToggleRow>
            <ToggleLabel>Email Notifications</ToggleLabel>
            <ToggleSwitch
              checked={emailEnabled}
              onChange={() =>
                this.setState((prev) => ({ emailEnabled: !prev.emailEnabled }))
              }
            />
          </ToggleRow>
          {emailEnabled && (
            <>
              <InputField
                type="email"
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </>
          )}
          <hr />
          <ToggleRow>
            <ToggleLabel>Missed Medication Alerts</ToggleLabel>
            <ToggleSwitch
              checked={alertEnabled}
              onChange={() =>
                this.setState((prev) => ({ alertEnabled: !prev.alertEnabled }))
              }
            />
          </ToggleRow>
          {alertEnabled && (
            <>
              <label>Alert me if medication isn’t taken within</label>
              <Dropdown
                value={selectedDelay}
                onChange={(e) =>
                  this.setState({ selectedDelay: e.target.value })
                }
              >
                {[
                  "1 hour",
                  "2 hours",
                  "3 hours",
                  "4 hours",
                  "5 hours",
                  "6 hours",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Dropdown>

              <label>Daily reminder time</label>
              <InputField
                type="time"
                value={reminderTime}
                onChange={(e) =>
                  this.setState({ reminderTime: e.target.value })
                }
              />
            </>
          )}
        </Section>

        <EmailPreview>
          <EmailiconContainer>
            <MdOutlineMail style={{ marginRight: "10px", fontSize: "20px" }} />
            <SectionTitle>Email Preview</SectionTitle>
          </EmailiconContainer>
          <EmailMesssage>
            <EmailLine>
              <strong>Subject:</strong> Medication Alert - {username}
            </EmailLine>
            <EmailLine>Hello,</EmailLine>
            <EmailLine>
              This is a reminder that {username} has not taken her medication
              today.
            </EmailLine>
            <EmailLine>
              Please check with her to ensure she takes her prescribed
              medication.
            </EmailLine>
            <EmailLine>Current adherence rate: 85% (5-day streak)</EmailLine>
          </EmailMesssage>
        </EmailPreview>

        <SaveButton>Save Notification Settings</SaveButton>
      </Container>
    );
  }
}

export default NotificationsTab;
