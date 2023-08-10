import React from "react";
import { Tooltip } from "@mui/material";
import "./styles.css";

const IconWithToolTip: React.FC<{
  textInside: string;
  backgroundColorOfIcon: string;
  tooltipText: string;
  onPress?: () => void;
}> = ({ textInside, backgroundColorOfIcon, tooltipText, onPress }) => {
  return (
    <Tooltip title={tooltipText}>
      <p
        onClick={onPress}
        style={{
          backgroundColor: backgroundColorOfIcon
            ? backgroundColorOfIcon
            : "black",
        }}
        className={"icon"}
      >
        {textInside}
      </p>
    </Tooltip>
  );
};

export default IconWithToolTip;
