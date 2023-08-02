import { FC } from "react";
import "./styles.css";
import SlotInsideWeekday from "../SlotInsideWeekday/SlotInsideWeekday";

const Weekday: FC = () => {
  return (
    <div className={"WeekdayWrapper"}>
      <div className={"day"}>
        <p>Δευτέρα</p>
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
    </div>
  );
};

export default Weekday;
