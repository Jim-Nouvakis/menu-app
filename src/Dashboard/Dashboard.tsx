import React, { FC } from "react";
import "./styles.css";
import Weekday from "../Components/Weekday/Weekday";
import { WeekdaysInterface } from "../interfaces";

const Dashboard: FC = () => {
  const weekdays: WeekdaysInterface["day"][] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className={"dashboardWrapper"}>
      {weekdays.map((day, index) => (
        <Weekday key={index} day={day} />
      ))}
    </div>
  );
};

export default Dashboard;
