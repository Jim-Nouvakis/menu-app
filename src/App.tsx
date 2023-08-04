import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import SettingsDashboard from "./SettingsDashboard/SettingsDashboard";
import ModalWrapper from "./Components/ModalWrapper/ModalWrapper";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";
import ToggleSettingsMenuButton from "./Components/ToggleSettingsMenuButton/ToggleSettingsMenuButton";
import { useAppSelector } from "./app/hooks";
import { useDispatch } from "react-redux";
import { parseMenu } from "./features/foodMenu/foodMenu-slice";
import foods from "./foods.json";

function App() {
  const isSettingsDashboardVisible = useAppSelector(
    (state) => state.settings.isVisible,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(parseMenu(foods));
  }, []);
  return (
    <LocalizationProvider adapterLocale="de" dateAdapter={AdapterDayjs}>
      <div className={"App"}>
        <Dashboard />
        {isSettingsDashboardVisible && <SettingsDashboard />}
        <ModalWrapper />
        {!isSettingsDashboardVisible && <ToggleSettingsMenuButton />}
      </div>
    </LocalizationProvider>
  );
}

export default App;
