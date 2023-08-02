import React from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import SettingsDashboard from "./SettingsDashboard/SettingsDashboard";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented } from "./features/counter/counter-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className={"App"}>
      <button
        onClick={() => {
          dispatch(incremented());
        }}
      />
      <Dashboard />
      <SettingsDashboard />
    </div>
  );
}

export default App;
