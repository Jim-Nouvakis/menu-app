import React, { FC } from "react";
import "./styles.css";
import SlotInsideWeekday from "../SlotInsideWeekday/SlotInsideWeekday";
import Button from "../Button/Button";

interface WeekdayProps {
  day: string;
}

const Weekday: React.FC<WeekdayProps> = ({ day }: WeekdayProps) => {
  return (
    <div className={"WeekdayWrapper"}>
      <div className={"day"}>
        <p>{day}</p>
      </div>
      <SlotInsideWeekday
        mealName={"ΠΡΩΙΝΟ"}
        foodsForTheMeal={[{ text: "food" }]}
      />
      <SlotInsideWeekday
        mealName={"ΓΕΥΜΑ"}
        foodsForTheMeal={[{ text: "food" }]}
      />
      <SlotInsideWeekday
        mealName={"ΑΠΟΓΕΥΜΑΤΙΝΟ"}
        foodsForTheMeal={[{ text: "food" }]}
      />
      <SlotInsideWeekday
        mealName={"ΒΡΑΔΙΝΟ"}
        foodsForTheMeal={[{ text: "food" }]}
      />
      <Button />
    </div>
  );
};

export default Weekday;
