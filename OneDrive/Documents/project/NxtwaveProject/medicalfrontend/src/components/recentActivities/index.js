import {
  ActivityContainer,
  ActivityTitle,
  ActivityItem,
  Status,
  StatusMissed,
  DayLabel,
  TimeLabel,
  PhotoTag,
  TickContainer,
  PhotoItem,
  ItemDiv,
  DateDiv,
} from "./styledComponents";
import { TiTick } from "react-icons/ti";
import { BiError } from "react-icons/bi";
import { BsFillCameraFill } from "react-icons/bs";
const mockData = [
  {
    day: "Monday, June 10",
    time: "8:30 AM",
    status: "Completed",
    photo: true,
  },
  {
    day: "Sunday, June 9",
    time: "8:15 AM",
    status: "Completed",
    photo: false,
  },
  {
    day: "Saturday, June 8",
    time: "",
    status: "Missed",
    photo: false,
  },
  {
    day: "Friday, June 7",
    time: "8:45 AM",
    status: "Completed",
    photo: true,
  },
  {
    day: "Thursday, June 6",
    time: "8:20 AM",
    status: "Completed",
    photo: false,
  },
];

const RecentActivity = () => {
  return (
    <ActivityContainer>
      <ActivityTitle>Recent Medication Activity </ActivityTitle>
      {mockData.map((item, index) => (
        <ActivityItem key={index}>
          <ItemDiv>
            <TickContainer status={item.status}>
              {item.status === "Missed" ? (
                <BiError />
              ) : (
                <TiTick stytle={{ color: "#1b9e1b" }} />
              )}
            </TickContainer>
            <DateDiv>
              <DayLabel>{item.day}</DayLabel>
              <TimeLabel>
                {item.status === "Missed"
                  ? "Medication missed"
                  : `Taken at ${item.time}`}
              </TimeLabel>
            </DateDiv>
          </ItemDiv>
          <PhotoItem>
            {item.photo && (
              <PhotoTag>
                {" "}
                <BsFillCameraFill style={{ margin: "4px" }} />
                Photo
              </PhotoTag>
            )}
            {item.status === "Missed" ? (
              <StatusMissed>Missed</StatusMissed>
            ) : (
              <Status>Completed</Status>
            )}
          </PhotoItem>
        </ActivityItem>
      ))}
    </ActivityContainer>
  );
};

export default RecentActivity;
