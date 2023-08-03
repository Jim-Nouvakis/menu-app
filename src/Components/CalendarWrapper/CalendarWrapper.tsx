import React from "react";
import { DatePicker } from "@mui/x-date-pickers";

const CalendarWrapper: React.FC = () => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <DatePicker format="DD/MM/YYYY" label={"Επιλογή Ημ/νίας"} />
    </div>
  );
};

export default CalendarWrapper;
