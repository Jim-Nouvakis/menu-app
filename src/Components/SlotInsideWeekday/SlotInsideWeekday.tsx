import React from "react";
import PlusIcon from "../PlusIcon/PlusIcon";
import "./styles.css";

interface SlotProps {
  mealName: string;
  foodsForTheMeal: {}[];
}

const SlotInsideWeekday: React.FC<SlotProps> = ({
  mealName,
  foodsForTheMeal,
}: SlotProps) => {
  return (
    <div className={"innerWeekdayDiv"}>
      <div className={"infoDiv"}>
        <p className={"timeTitle"}>{mealName}</p>
        <p className={"foodTitle"}>Κοτοπουλο με μπαμιες</p>
      </div>
      <PlusIcon />
    </div>
  );
};

export default SlotInsideWeekday;
