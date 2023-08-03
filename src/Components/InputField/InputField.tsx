import React from "react";
import { TextField } from "@mui/material";
import "./styles.css";

const InputField: React.FC<{ placeholderText: string }> = ({
  placeholderText,
}) => {
  return (
    <div className={"inputField"}>
      <TextField type="number" label={placeholderText} />
    </div>
  );
};

export default InputField;
