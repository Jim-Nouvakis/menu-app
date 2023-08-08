import React from "react";
import "./styles.css";

const Button: React.FC<{
  textInside: string;
  onClickAction: () => void;
  classFromParent?:
    | "red"
    | "black"
    | "green"
    | "red smaller"
    | "black smaller"
    | "green smaller"
    | "red smaller withTopMargin"
    | "black smaller withTopMargin"
    | "green smaller withTopMargin";
}> = ({
  textInside,
  onClickAction,
  classFromParent,
}: {
  onClickAction: () => void;
  textInside: string;
  classFromParent?:
    | "red"
    | "black"
    | "green"
    | "red smaller"
    | "black smaller"
    | "green smaller"
    | "red smaller withTopMargin"
    | "black smaller withTopMargin"
    | "green smaller withTopMargin";
}) => {
  return (
    <button
      onClick={onClickAction}
      className={`button ${classFromParent ? classFromParent : ""}`}
    >
      {textInside}
    </button>
  );
};

export default Button;
