import React from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import SettingsDashboard from "./SettingsDashboard/SettingsDashboard";

function App() {
  return (
    <div className={"App"}>
      <Dashboard />
      <SettingsDashboard />
    </div>
  );
}

export default App;
