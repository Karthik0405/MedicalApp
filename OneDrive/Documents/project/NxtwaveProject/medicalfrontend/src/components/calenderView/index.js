import React, { Component } from "react";
import {
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
  CalendarWrapper,
  CalendarDetailsBox,
  CalendarDetailsTitle,
  CalendarDetailsText,
  CalendarContainer,
  CalenderHeading,
  TakenContainer,
} from "./styledComponents";
import { FiCalendar } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { BiError } from "react-icons/bi";
const today = new Date();
today.setHours(0, 0, 0, 0);

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

class CalendarView extends Component {
  state = {
    selectedDate: today,
    month: today.getMonth(),
    year: today.getFullYear(),
    markedDates: {},
    jwtToken: localStorage.getItem("jwtToken"),
    username: localStorage.getItem("username"),
  };

  componentDidMount() {
    this.fetchMarkedDates();
  }

  fetchMarkedDates = async () => {
    const { jwtToken, username } = this.state;
    try {
      const response = await fetch(
        `http://localhost:3000/medication-history/${username}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const data = await response.json();
      const marked = {};
      data.forEach((item) => {
        const date = new Date(item.date + "T00:00:00");
        marked[getLocalDateString(date)] = true;
      });
      this.setState({ markedDates: marked });
    } catch (error) {
      console.error("Fetch error:", error);
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

  render() {
    const { selectedDate, month, year, markedDates } = this.state;
    const matrix = getCalendarMatrix(year, month);
    const selectedKey = getLocalDateString(selectedDate);

    return (
      <CalendarContainer>
        <CalenderHeading>Medication Calendar Overview</CalenderHeading>
        <CalendarWrapper>
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
              {matrix.map((week, i) =>
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
                <LegendDot color="#22c55e" />
                Medication taken
              </LegendItem>
              <LegendItem>
                <LegendDot color="#f87171" />
                Missed medication
              </LegendItem>
              <LegendItem>
                <LegendDot color="#2563eb" />
                Today
              </LegendItem>
            </Legend>
          </CalendarCard>
          <CalendarDetailsBox>
            <CalendarDetailsTitle>
              <FiCalendar /> Details for {selectedKey}
            </CalendarDetailsTitle>
            <CalendarDetailsText>
              {selectedDate > today ? (
                <TakenContainer
                  style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}
                >
                  <BiError style={{ marginRight: "10px", color: "#0369a1" }} />
                  You will mark on future
                </TakenContainer>
              ) : markedDates[selectedKey] ? (
                <TakenContainer>
                  <TiTick style={{ marginRight: "10px" }} />
                  Medicine is taken
                </TakenContainer>
              ) : selectedKey === getLocalDateString(today) ? (
                `Monitor ${this.state.username}'s medication status for today.`
              ) : (
                <TakenContainer
                  style={{ color: "#d12d2d", backgroundColor: "#ffe6e6" }}
                >
                  <BiError style={{ color: "#d12d2d", marginRight: "10px" }} />
                  Medicine is missed
                </TakenContainer>
              )}
            </CalendarDetailsText>
          </CalendarDetailsBox>
        </CalendarWrapper>
      </CalendarContainer>
    );
  }
}

export default CalendarView;
