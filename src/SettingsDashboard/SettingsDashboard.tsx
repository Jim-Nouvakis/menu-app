import React from "react";
import "./styles.css";
import Button from "../Components/Button/Button";
import { toggleVisibility } from "../features/modal/modal-slice";
import { useAppDispatch } from "../app/hooks";
import InputField from "../Components/InputField/InputField";
import CalendarWrapper from "../Components/CalendarWrapper/CalendarWrapper";

const SettingsDashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={"settingsWrapper"}>
      <Button
        textInside={"Σύνολο Εβδομάδας"}
        onClickAction={() => dispatch(toggleVisibility(true))}
      ></Button>
      <InputField placeholderText={"Αριθμός Ατόμων"} />
      <CalendarWrapper />
    </div>
  );
};

export default SettingsDashboard;
