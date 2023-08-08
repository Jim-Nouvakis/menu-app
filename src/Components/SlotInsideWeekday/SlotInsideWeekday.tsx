import React from "react";
import PlusIcon from "../PlusIcon/PlusIcon";
import "./styles.css";
import { setSelectedDayAndTime } from "../../features/foodMenu/foodMenu-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { TypeOfLaunchInterface, WeekdaysInterface } from "../../interfaces";

interface SlotProps {
  mealName: TypeOfLaunchInterface["typeOfLaunch"];
  foodsForTheMeal: {}[];
  weekday: WeekdaysInterface["day"];
}

const SlotInsideWeekday: React.FC<SlotProps> = ({
  mealName,
  foodsForTheMeal,
  weekday,
}: SlotProps) => {
  const dispatch = useAppDispatch();
  const foodsInsideSlot = useAppSelector(
    (state) => state.menu.weekDaysWithItsLaunchTimes[weekday][mealName],
  );
  return (
    <div className={"innerWeekdayDiv"}>
      <div className={"infoDiv"}>
        <p className={"timeTitle"}>
          {mealName === "breakfast"
            ? "ΠΡΩΙΝΟ"
            : mealName === "launch"
            ? "ΓΕΥΜΑ"
            : mealName === "snack"
            ? "ΑΠΟΓΕΥΜΑΤΙΝΟ"
            : mealName === "dinner"
            ? "ΒΡΑΔΙΝΟ"
            : mealName}
        </p>
        {Object.keys(foodsInsideSlot).map((food) => (
          <p className={"foodTitle"}>{food}</p>
        ))}
      </div>
      <PlusIcon
        onClick={() => {
          dispatch(setSelectedDayAndTime({ day: weekday, launch: mealName }));
        }}
      />
    </div>
  );
};

export default SlotInsideWeekday;
