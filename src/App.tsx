import React from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import SettingsDashboard from "./SettingsDashboard/SettingsDashboard";
import ModalWrapper from "./Components/ModalWrapper/ModalWrapper";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";
import ToggleSettingsMenuButton from "./Components/ToggleSettingsMenuButton/ToggleSettingsMenuButton";

function App() {
  return (
    <LocalizationProvider adapterLocale="de" dateAdapter={AdapterDayjs}>
      <div className={"App"}>
        <Dashboard />
        <SettingsDashboard />
        <ModalWrapper />
        <ToggleSettingsMenuButton />
      </div>
    </LocalizationProvider>
  );
}

export default App;
