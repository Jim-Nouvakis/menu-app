import React, { useState } from "react";
import PlusIcon from "../PlusIcon/PlusIcon";
import "./styles.css";
import {
  getInfoAboutTheFoodThatWasSelected,
  removeFood,
  setSelectedDayAndTime,
} from "../../features/foodMenu/foodMenu-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { TypeOfLaunchInterface, WeekdaysInterface } from "../../interfaces";
import IconWithToolTip from "../IconWithToolTip/IconWithToolTip";
import {
  setTypeOfModal,
  toggleVisibilityOfModal,
} from "../../features/modal/modal-slice";

interface SlotProps {
  mealName: TypeOfLaunchInterface["typeOfLaunch"];
  weekday: WeekdaysInterface["day"];
}

const SlotInsideWeekday: React.FC<SlotProps> = ({
  mealName,
  weekday,
}: SlotProps) => {
  const dispatch = useAppDispatch();
  const foodsInsideSlot = useAppSelector(
    (state) => state.menu.weekDaysWithItsLaunchTimes[weekday][mealName],
  );
  const [isHovered, setIsHovered] = useState(false);
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
        {Object.keys(foodsInsideSlot).map((food, index) => (
          <div
            key={index}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            onMouseOver={() => setIsHovered(true)}
            className={"foodDiv"}
          >
            <p className={"foodTitle"}>{food}</p>
            {isHovered && (
              <div className={"iconsContainer"}>
                <IconWithToolTip
                  textInside={"X"}
                  tooltipText={"Διαγραφή"}
                  onPress={() => {
                    dispatch(
                      removeFood({
                        day: weekday,
                        typeOfMeal: mealName,
                        recipe: food,
                      }),
                    );
                  }}
                  backgroundColorOfIcon={"#FF5858FF"}
                />
                <IconWithToolTip
                  textInside={"i"}
                  onPress={() => {
                    dispatch(toggleVisibilityOfModal(true));
                    dispatch(setTypeOfModal("recipeInfo"));
                    dispatch(
                      getInfoAboutTheFoodThatWasSelected({
                        day: weekday,
                        typeOfMeal: mealName,
                        recipe: food,
                      }),
                    );
                  }}
                  tooltipText={"Πληροφορίες Φαγητού"}
                  backgroundColorOfIcon={"#4666ac"}
                />
              </div>
            )}
          </div>
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
