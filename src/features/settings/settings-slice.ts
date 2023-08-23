import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  isVisible: boolean;
  menuFromDate: string;
  menuToDate: string;
}

const initialState: SettingsState = {
  isVisible: false,
  menuFromDate: "",
  menuToDate: "",
};

const settingsSlice = createSlice({
  name: "Settings",
  initialState,
  reducers: {
    toggleSettingsVisibility(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
    setDateFromRange(state, action: PayloadAction<string>) {
      state.menuFromDate = action.payload;
      localStorage.setItem("dateFrom", action.payload);
    },
    setDateToRange(state, action: PayloadAction<string>) {
      state.menuToDate = action.payload;
      localStorage.setItem("dateTo", action.payload);
    },
  },
});

export const { setDateToRange, toggleSettingsVisibility, setDateFromRange } =
  settingsSlice.actions;

export default settingsSlice.reducer;
