import { FC } from "react";
import "./styles.css";
import { toggleVisibility } from "../../features/modal/modal-slice";
import { useAppDispatch } from "../../app/hooks";

const PlusIcon: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(toggleVisibility(true))}
      className={"plusIcon"}
    >
      <span className={"plusSpan"}>+</span>
    </div>
  );
};

export default PlusIcon;
