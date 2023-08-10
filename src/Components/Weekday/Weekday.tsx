import React from "react";
import "./styles.css";
import SlotInsideWeekday from "../SlotInsideWeekday/SlotInsideWeekday";
import Button from "../Button/Button";
import { useAppDispatch } from "../../app/hooks";
import { toggleVisibility } from "../../features/modal/modal-slice";
import { WeekdaysInterface } from "../../interfaces";

interface WeekdayProps {
  day: WeekdaysInterface["day"];
}

const Weekday: React.FC<WeekdayProps> = ({ day }: WeekdayProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={"WeekdayWrapper"}>
      <div>
        <div className={"day"}>
          <p>
            {day === "Monday"
              ? "ΔΕΥΤΕΡΑ"
              : day === "Tuesday"
              ? "ΤΡΙΤΗ"
              : day === "Wednesday"
              ? "ΤΕΤΑΡΤΗ"
              : day === "Thursday"
              ? "ΠΕΜΠΤΗ"
              : day === "Friday"
              ? "ΠΑΡΑΣΚΕΥΗ"
              : day === "Saturday"
              ? "ΣΑΒΒΑΤΟ"
              : day === "Sunday"
              ? "ΚΥΡΙΑΚΗ"
              : ""}
          </p>
        </div>
        <SlotInsideWeekday
          weekday={day}
          mealName={"breakfast"}
          foodsForTheMeal={[{ text: "food" }]}
        />
        <SlotInsideWeekday
          weekday={day}
          mealName={"launch"}
          foodsForTheMeal={[{ text: "food" }]}
        />
        <SlotInsideWeekday
          weekday={day}
          mealName={"snack"}
          foodsForTheMeal={[{ text: "food" }]}
        />
        <SlotInsideWeekday
          weekday={day}
          mealName={"dinner"}
          foodsForTheMeal={[{ text: "food" }]}
        />
      </div>
      <Button
        onClickAction={() => dispatch(toggleVisibility(true))}
        textInside={"Σύνολο"}
        classFromParent={"red"}
      />
    </div>
  );
};

export default Weekday;
