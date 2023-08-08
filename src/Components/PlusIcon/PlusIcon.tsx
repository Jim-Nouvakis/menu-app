import "./styles.css";
import {
  setTypeOfModal,
  toggleVisibility,
} from "../../features/modal/modal-slice";
import { useAppDispatch } from "../../app/hooks";
import React from "react";

const PlusIcon: React.FC<{ onClick(): void }> = ({
  onClick,
}: {
  onClick(): void;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        dispatch(toggleVisibility(true));
        dispatch(setTypeOfModal("menu"));
      }}
      className={"plusIcon"}
    >
      <span onClick={onClick} className={"plusSpan"}>
        +
      </span>
    </div>
  );
};

export default PlusIcon;
