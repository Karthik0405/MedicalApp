import React, { Component } from "react";
import { FiUser, FiCalendar, FiImage, FiCamera } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { LuClock3 } from "react-icons/lu";
import { Oval } from "react-loader-spinner"; // Loader Spinner

import {
  DashboardContainer,
  HeaderRow,
  UserIcon,
  Greeting,
  GreetingTitle,
  GreetingSubtitle,
  StatsRow,
  StatCard,
  StatValue,
  StatLabel,
  MainContent,
  Card,
  SectionTitle,
  MedSet,
  MedNumber,
  MedInfo,
  MedTime,
  ProofBox,
  ProofIcon,
  ProofText,
  ProofSub,
  TakePhotoBtn,
  MarkBtn,
  CalendarCard,
  CalendarHeader,
  CalendarTitle,
  CalendarNavBtn,
  CalendarGrid,
  CalendarDay,
  CalendarCell,
  Legend,
  LegendItem,
  LegendDot,
  BackgroundDiv,
  SuccessBox,
  SuccessIconWrapper,
  SuccessIcon,
  SuccessTitle,
  SuccessSubtext,
  GreenMedCard,
  GreenMedLeft,
  GreenCheckCircle,
  GreenMedInfo,
  GreenTimeLabel,
  FutureWarning,
  FutureWarningText,
} from "./styledComponents";

const getLocalDateString = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;

const getCalendarMatrix = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const matrix = [];
  let week = [];
  let day = 1 - firstDay.getDay();
  while (day <= lastDay.getDate()) {
    for (let i = 0; i < 7; i++, day++) {
      week.push(day > 0 && day <= lastDay.getDate() ? day : null);
    }
    matrix.push(week);
    week = [];
  }
  return matrix;
};

const today = new Date();
today.setHours(0, 0, 0, 0);

class PatientDashboard extends Component {
  state = {
    dateList: [],
    markedDates: {},
    selectedDate: today,
    month: today.getMonth(),
    year: today.getFullYear(),
    selectedFileName: null,
    imagePreview: null,
    jwtToken: localStorage.getItem("jwtToken"),
    username: localStorage.getItem("username"),
    loading: false,
  };

  componentDidMount = () => {
    this.fetchMedicationHistory();
  };

  fetchMedicationHistory = async () => {
    const { jwtToken, username } = this.state;
    this.setState({ loading: true });
    try {
      const res = await fetch(
        `http://localhost:3000/medication-history/${username}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const data = await res.json();
      const marked = {};
      const list = [];

      data.forEach((item) => {
        const date = new Date(item.date + "T00:00:00");
        const key = getLocalDateString(date);
        marked[key] = true;
        list.push(key);
      });

      this.setState({ markedDates: marked, dateList: list });
    } catch (e) {
      console.error("Failed to fetch:", e);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleMarkAsTaken = async () => {
    const { selectedDate, selectedFileName, jwtToken, username } = this.state;
    const date = getLocalDateString(selectedDate);
    const file = selectedFileName || null;

    this.setState({ loading: true });
    try {
      const res = await fetch("http://localhost:3000/medication-history/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          date,
          imageUrl: file,
        }),
      });

      await res.text();
      this.setState((prev) => ({
        markedDates: { ...prev.markedDates, [date]: true },
      }));

      await this.fetchMedicationHistory();
    } catch (e) {
      console.error("POST failed:", e);
    } finally {
      this.setState({ loading: false });
    }
  };

  getTimeGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good Morning!";
    if (h < 17) return "Good Afternoon!";
    return "Good Evening!";
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState({
        selectedFileName: file.name,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  goToPrevMonth = () => {
    this.setState((prev) => ({
      month: prev.month === 0 ? 11 : prev.month - 1,
      year: prev.month === 0 ? prev.year - 1 : prev.year,
    }));
  };

  goToNextMonth = () => {
    this.setState((prev) => ({
      month: prev.month === 11 ? 0 : prev.month + 1,
      year: prev.month === 11 ? prev.year + 1 : prev.year,
    }));
  };

  render = () => {
    const {
      selectedDate,
      markedDates,
      selectedFileName,
      imagePreview,
      dateList,
      month,
      year,
      loading,
    } = this.state;

    const calendarMatrix = getCalendarMatrix(year, month);
    const selectedKey = getLocalDateString(selectedDate);
    const isMarkedTaken = markedDates[selectedKey];
    const isTodaySelected =
      selectedDate.toDateString() === today.toDateString();
    const isFutureDate = selectedDate > today;
    const isPastDate = selectedDate < today;
    const isNotToday = isFutureDate || isPastDate;
    const shouldShowWarning = !isMarkedTaken && isNotToday;

    const streak = dateList.length;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthlyRate = ((streak / daysInMonth) * 100).toFixed(0);

    if (loading) {
      return (
        <BackgroundDiv
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Oval
            height={80}
            width={80}
            color="#2563eb"
            secondaryColor="#94a3b8"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </BackgroundDiv>
      );
    }

    return (
      <BackgroundDiv>
        <DashboardContainer>
          <HeaderRow>
            <UserIcon>
              <FiUser />
            </UserIcon>
            <Greeting>
              <GreetingTitle>{this.getTimeGreeting()}</GreetingTitle>
              <GreetingSubtitle>
                Stay on track with your medication.
              </GreetingSubtitle>
            </Greeting>
          </HeaderRow>

          <StatsRow>
            <StatCard>
              <StatValue>{streak}</StatValue>
              <StatLabel>Day Streak</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>
                {markedDates[getLocalDateString(today)] ? (
                  <TiTick style={{ color: "white", fontSize: "30px" }} />
                ) : (
                  <FaRegCircle />
                )}
              </StatValue>
              <StatLabel>Today's Status</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{monthlyRate}%</StatValue>
              <StatLabel>Monthly Rate</StatLabel>
            </StatCard>
          </StatsRow>
        </DashboardContainer>

        <MainContent>
          <Card>
            <SectionTitle>
              <FiCalendar style={{ color: "blue", fontSize: "30px" }} />
              {isTodaySelected
                ? "Today's Medication"
                : `Medication for ${selectedDate.toLocaleDateString()}`}
            </SectionTitle>

            {isMarkedTaken ? (
              <>
                <SuccessBox>
                  <SuccessIconWrapper>
                    <SuccessIcon>
                      <TiTick />
                    </SuccessIcon>
                  </SuccessIconWrapper>
                  <SuccessTitle>Medication Completed!</SuccessTitle>
                  <SuccessSubtext>
                    You've taken your medication for{" "}
                    {selectedDate.toLocaleDateString()}.
                  </SuccessSubtext>
                </SuccessBox>
                <GreenMedCard>
                  <GreenMedLeft>
                    <GreenCheckCircle>
                      <TiTick />
                    </GreenCheckCircle>
                    <GreenMedInfo>
                      <div>Paracetmol</div>
                      <div>Take 1 tab at Morning.</div>
                    </GreenMedInfo>
                  </GreenMedLeft>
                  <GreenTimeLabel>
                    <LuClock3 /> 8:00 AM
                  </GreenTimeLabel>
                </GreenMedCard>
              </>
            ) : (
              <>
                <MedSet>
                  <MedNumber>1</MedNumber>
                  <MedInfo>
                    <div style={{ fontWeight: 600, color: "#2563eb" }}>
                      Paracetamol
                    </div>
                    <div style={{ color: "#64748b", fontSize: "0.98rem" }}>
                      Take 1 tab at Morning.
                    </div>
                  </MedInfo>
                  <MedTime>
                    <LuClock3 /> 8:00 AM
                  </MedTime>
                </MedSet>

                <ProofBox>
                  <ProofIcon>
                    <FiImage />
                  </ProofIcon>
                  <ProofText>Add Proof Photo (Optional)</ProofText>
                  <ProofSub>
                    Take a photo of your medication as confirmation
                  </ProofSub>
                  <TakePhotoBtn as="label">
                    <FiCamera /> {imagePreview ? "Change Photo" : "Take Photo"}
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={this.handleFileChange}
                    />
                  </TakePhotoBtn>
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        width: "100%",
                        maxWidth: "250px",
                        borderRadius: "8px",
                        marginTop: "10px",
                      }}
                    />
                  )}
                  {selectedFileName && (
                    <div style={{ fontWeight: 500, marginBottom: "10px" }}>
                      Photo Selected: {selectedFileName}
                    </div>
                  )}
                </ProofBox>

                {isTodaySelected && (
                  <MarkBtn onClick={this.handleMarkAsTaken}>
                    <TiTick /> Mark as Taken
                  </MarkBtn>
                )}

                {shouldShowWarning && (
                  <>
                    <FutureWarning>
                      <TiTick /> Cannot mark future or past dates
                    </FutureWarning>
                    <FutureWarningText>
                      You can only mark today’s medication as taken
                    </FutureWarningText>
                  </>
                )}
              </>
            )}
          </Card>

          <CalendarCard>
            <CalendarHeader>
              <CalendarNavBtn onClick={this.goToPrevMonth}>←</CalendarNavBtn>
              <CalendarTitle>
                {new Date(year, month).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </CalendarTitle>
              <CalendarNavBtn onClick={this.goToNextMonth}>→</CalendarNavBtn>
            </CalendarHeader>

            <CalendarGrid>
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <CalendarDay key={d}>{d}</CalendarDay>
              ))}
              {calendarMatrix.map((week, i) =>
                week.map((date, j) => {
                  const cellDate = date ? new Date(year, month, date) : null;
                  const cellKey = cellDate
                    ? getLocalDateString(cellDate)
                    : null;
                  const isSelected =
                    cellDate?.toDateString() === selectedDate.toDateString();
                  const isToday =
                    cellDate?.toDateString() === today.toDateString();
                  const isTaken = cellKey && markedDates[cellKey];
                  const isMissed = cellDate && cellDate < today && !isTaken;

                  const status = isSelected
                    ? "selected"
                    : isToday
                    ? "today"
                    : isTaken
                    ? "taken"
                    : isMissed
                    ? "missed"
                    : "";

                  return (
                    <CalendarCell
                      key={`${i}-${j}`}
                      status={status}
                      onClick={() =>
                        date &&
                        this.setState({
                          selectedDate: new Date(year, month, date),
                        })
                      }
                    >
                      {date || ""}
                    </CalendarCell>
                  );
                })
              )}
            </CalendarGrid>

            <Legend>
              <LegendItem>
                <LegendDot color="#22c55e" /> Medication taken
              </LegendItem>
              <LegendItem>
                <LegendDot color="#fca5a5" /> Missed medication
              </LegendItem>
              <LegendItem>
                <LegendDot color="#2563eb" /> Today
              </LegendItem>
            </Legend>
          </CalendarCard>
        </MainContent>
      </BackgroundDiv>
    );
  };
}

export default PatientDashboard;
