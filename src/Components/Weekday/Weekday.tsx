import React, { FC } from "react";
import "./styles.css";
import SlotInsideWeekday from "../SlotInsideWeekday/SlotInsideWeekday";
import Button from "../Button/Button";
import { useAppDispatch } from "../../app/hooks";
import { toggleVisibility } from "../../features/modal/modal-slice";

interface WeekdayProps {
  day: string;
}

const Weekday: React.FC<WeekdayProps> = ({ day }: WeekdayProps) => {
  const dispatch = useAppDispatch();

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
      <Button
        onClickAction={() => dispatch(toggleVisibility(true))}
        textInside={"Σύνολο"}
      />
    </div>
  );
};

export default Weekday;
