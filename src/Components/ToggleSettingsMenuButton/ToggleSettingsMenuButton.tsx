import { FC } from "react";
import "./styles.css";
import { toggleVisibility } from "../../features/modal/modal-slice";
import { useAppDispatch } from "../../app/hooks";

const ToggleSettingsMenuButton: FC<{ isFromApp?: boolean }> = ({
  isFromApp,
}: {
  isFromApp?: boolean;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(toggleVisibility(true))}
      className={isFromApp ? "toggleSettingsButton " : "toggleSettingsButton"}
    >
      <span className={"toggleSettingsButtonSpan"}>Ρυθμίσεις</span>
    </div>
  );
};

export default ToggleSettingsMenuButton;
