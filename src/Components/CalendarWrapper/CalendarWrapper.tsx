import React from "react";
import { DatePicker } from "@mui/x-date-pickers";

interface CalendarInterface {
  innerText: string;
  onSelectDate: (e: any) => void;
}

const CalendarWrapper: React.FC<CalendarInterface> = ({
  innerText,
  onSelectDate,
}: CalendarInterface) => {
  return (
    <div>
      <DatePicker
        onAccept={(e) => {
          //@ts-ignore
          if (e) onSelectDate(`${e?.$D}-${parseInt(e.$M) + 1}-${e.$y}`);
        }}
        format="DD-MM-YYYY"
        label={innerText}
        sx={{ "&.MuiFormControl-root": { width: "100%", margin: "10px 0" } }}
      />
    </div>
  );
};

export default CalendarWrapper;
