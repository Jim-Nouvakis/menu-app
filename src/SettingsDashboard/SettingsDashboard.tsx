import React from "react";
import "./styles.css";
import Button from "../Components/Button/Button";
import { toggleVisibilityOfModal } from "../features/modal/modal-slice";
import { useAppDispatch } from "../app/hooks";
import InputField from "../Components/InputField/InputField";
import CalendarWrapper from "../Components/CalendarWrapper/CalendarWrapper";
import { toggleSettingsVisibility } from "../features/settings/settings-slice";
import { resetWeeklyMenu } from "../features/foodMenu/foodMenu-slice";

const SettingsDashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={"settingsWrapper"}>
      <div>
        <Button
          classFromParent={"red smaller"}
          textInside={"Σύνολο Εβδομάδας"}
          onClickAction={() => dispatch(toggleVisibilityOfModal(true))}
        ></Button>
        <InputField placeholderText={"Αριθμός Ατόμων"} />
        <CalendarWrapper />
        <Button
          classFromParent={"green smaller"}
          textInside={"Τυχαίο Μενού"}
          onClickAction={() => {}}
        />
        <Button
          classFromParent={"red smaller withTopMargin"}
          textInside={"Καθαρισμός Μενού"}
          onClickAction={() => {
            localStorage.removeItem("weeklyMenu");
            dispatch(resetWeeklyMenu());
          }}
        />
      </div>
      <Button
        onClickAction={() => dispatch(toggleSettingsVisibility(false))}
        classFromParent={"black smaller"}
        textInside={"Τέλος Ρυθμίσεων"}
      />
    </div>
  );
};

export default SettingsDashboard;
