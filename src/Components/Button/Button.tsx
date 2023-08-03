import React from "react";
import "./styles.css";

const Button: React.FC<{ textInside: string; onClickAction: () => void }> = ({
  textInside,
  onClickAction,
}: {
  onClickAction: () => void;
  textInside: string;
}) => {
  return (
    <button onClick={onClickAction} className={"button"}>
      {textInside}
    </button>
  );
};

export default Button;
