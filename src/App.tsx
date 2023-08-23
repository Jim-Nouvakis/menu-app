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
import PdfGenerator from "./Components/PdfGenerator/PdfGenerator";
import {
  setDateFromRange,
  setDateToRange,
} from "./features/settings/settings-slice";

function App() {
  const isSettingsDashboardVisible = useAppSelector(
    (state) => state.settings.isVisible,
  );
  const isPdfGeneratorVisible = useAppSelector(
    (state) => state.pdfGenerator.isVisible,
  );
  const getWeeklyMenuFromLocalStorage = async () => {
    const localStorageMenu = await localStorage.getItem("weeklyMenu");
    if (localStorageMenu) {
      dispatch(setWeeklyMenu(JSON?.parse(localStorageMenu)));
    }
  };

  const getDatesFromLocalStorage = async () => {
    const localStorageFromDate = await localStorage.getItem("dateFrom");
    const localStorageToDate = await localStorage.getItem("dateTo");

    if (localStorageFromDate && localStorageToDate) {
      dispatch(setDateToRange(localStorageToDate));
      dispatch(setDateFromRange(localStorageFromDate));
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(parseMenu(foods));
    getWeeklyMenuFromLocalStorage();
    getDatesFromLocalStorage();
  }, []);
  return (
    <LocalizationProvider adapterLocale="el" dateAdapter={AdapterDayjs}>
      <div className={"App"}>
        {!isPdfGeneratorVisible && <Dashboard />}
        {isSettingsDashboardVisible && <SettingsDashboard />}
        <ModalWrapper />
        {isPdfGeneratorVisible && <PdfGenerator />}
        {!isSettingsDashboardVisible && <ToggleSettingsMenuButton />}
      </div>
    </LocalizationProvider>
  );
}

export default App;
