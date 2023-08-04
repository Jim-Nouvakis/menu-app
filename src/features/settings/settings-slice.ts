import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  isVisible: boolean;
}

const initialState: SettingsState = {
  isVisible: false,
};

const settingsSlice = createSlice({
  name: "Settings",
  initialState,
  reducers: {
    toggleSettingsVisibility(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
  },
});

export const { toggleSettingsVisibility } = settingsSlice.actions;

export default settingsSlice.reducer;
