import { FC } from "react";
import "./styles.css";
import { useAppDispatch } from "../../app/hooks";
import { toggleSettingsVisibility } from "../../features/settings/settings-slice";

const ToggleSettingsMenuButton: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(toggleSettingsVisibility(true))}
      className={"toggleSettingsButton"}
    >
      <span className={"toggleSettingsButtonSpan"}>Ρυθμίσεις</span>
    </div>
  );
};

export default ToggleSettingsMenuButton;
