import React from "react";
import "./styles.css";
import SlotInsideWeekday from "../SlotInsideWeekday/SlotInsideWeekday";
import Button from "../Button/Button";
import { useAppDispatch } from "../../app/hooks";
import {
  setTypeOfModal,
  toggleVisibilityOfModal,
} from "../../features/modal/modal-slice";
import { WeekdaysInterface } from "../../interfaces";
import { setSelectedDayForTotal } from "../../features/foodMenu/foodMenu-slice";
import { returnNameOfDayInGreek } from "../../utils";

interface WeekdayProps {
  day: WeekdaysInterface["day"];
}

const Weekday: React.FC<WeekdayProps> = ({ day }: WeekdayProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={"WeekdayWrapper"}>
      <div>
        <div className={"day"}>
          <p>{returnNameOfDayInGreek(day)}</p>
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
        onClickAction={() => {
          dispatch(setSelectedDayForTotal(day));
          dispatch(setTypeOfModal("totalOfDay"));
          dispatch(toggleVisibilityOfModal(true));
        }}
        textInside={"Σύνολο"}
        classFromParent={"red"}
      />
    </div>
  );
};

export default Weekday;
