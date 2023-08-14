import React from "react";
import { TextField } from "@mui/material";
import "./styles.css";
import { useDispatch } from "react-redux";
import { setNumberOfPeople } from "../../features/foodMenu/foodMenu-slice";
import { useAppSelector } from "../../app/hooks";

const InputField: React.FC<{ placeholderText: string }> = ({
  placeholderText,
}) => {
  const numberOfPeople = useAppSelector(
    (state) => state.menu.settingsForMenu.numberOfPeople,
  );
  const dispatch = useDispatch();
  return (
    <div className={"inputField"}>
      <TextField
        defaultValue={numberOfPeople}
        onChange={(e) => {
          if (e.target.value) {
            dispatch(setNumberOfPeople(parseInt(e.target.value)));
          }
        }}
        type="number"
        fullWidth={true}
        label={placeholderText}
      />
    </div>
  );
};

export default InputField;
