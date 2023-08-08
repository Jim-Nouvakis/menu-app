import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import SettingsDashboard from "./SettingsDashboard/SettingsDashboard";
import ModalWrapper from "./Components/ModalWrapper/ModalWrapper";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/el";
import ToggleSettingsMenuButton from "./Components/ToggleSettingsMenuButton/ToggleSettingsMenuButton";
import { useAppSelector } from "./app/hooks";
import { useDispatch } from "react-redux";
import { parseMenu, setWeeklyMenu } from "./features/foodMenu/foodMenu-slice";
import foods from "./foods.json";

function App() {
  const isSettingsDashboardVisible = useAppSelector(
    (state) => state.settings.isVisible,
  );

  const getWeeklyMenuFromLocalStorage = async () => {
    const localStorageMenu = await localStorage.getItem("weeklyMenu");
    if (localStorageMenu) {
      dispatch(setWeeklyMenu(JSON?.parse(localStorageMenu)));
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(parseMenu(foods));
    getWeeklyMenuFromLocalStorage();
  }, []);
  return (
    <LocalizationProvider adapterLocale="el" dateAdapter={AdapterDayjs}>
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
