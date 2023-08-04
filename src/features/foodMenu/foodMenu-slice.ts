import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodMenuState {
  settingsForMenu: {
    numberOfPeople: number;
    daySelected: string | null;
  };
  menu: { Ροφήματα: { Καφέδες: {} } };
}

const initialState: FoodMenuState = {
  settingsForMenu: { numberOfPeople: 0, daySelected: null },
  menu: { Ροφήματα: { Καφέδες: {} } },
};

const foodMenuSlice = createSlice({
  name: "FoodMenu",
  initialState,
  reducers: {
    parseMenu(state, action: PayloadAction<{ Ροφήματα: { Καφέδες: {} } }>) {
      state.menu = action.payload;
    },
  },
});

export const { parseMenu } = foodMenuSlice.actions;

export default foodMenuSlice.reducer;
