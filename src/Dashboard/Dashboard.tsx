import React, { FC } from "react";
import "./styles.css";
import Weekday from "../Components/Weekday/Weekday";

const Dashboard: FC = () => {
  const weekdays: string[] = [
    "ΔΕΥΤΕΡΑ",
    "ΤΡΙΤΗ",
    "ΤΕΤΑΡΤΗ",
    "ΠΕΜΠΤΗ",
    "ΠΑΡΑΣΚΕΥΗ",
    "ΣΑΒΒΑΤΟ",
    "ΚΥΡΙΑΚΗ",
  ];
  return (
    <div className={"dashboardWrapper"}>
      {weekdays.map((day) => (
        <Weekday day={day} />
      ))}
    </div>
  );
};

export default Dashboard;
