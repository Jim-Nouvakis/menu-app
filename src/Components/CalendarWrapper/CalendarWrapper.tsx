import React from "react";
import { DatePicker } from "@mui/x-date-pickers";

const CalendarWrapper: React.FC = () => {
  return (
    <div>
      <DatePicker format="DD/MM/YYYY" label={"Επιλογή Ημ/νίας"} />
    </div>
  );
};

export default CalendarWrapper;
