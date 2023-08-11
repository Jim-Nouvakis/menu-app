import "./styles.css";
import {
  setTypeOfModal,
  toggleVisibilityOfModal,
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
        dispatch(toggleVisibilityOfModal(true));
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
