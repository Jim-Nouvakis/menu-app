import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeOfLaunchInterface, WeekdaysInterface } from "../../interfaces";

interface FoodMenuState {
  settingsForMenu: {
    numberOfPeople: number;
    daySelected: string | null;
  };
  menu: { Ροφήματα: { Καφέδες: {} } };
  weekDaysWithItsLaunchTimes: {
    Monday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Tuesday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Wednesday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Thursday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Friday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Saturday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Sunday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
  };
  selectedDayAndTime: {
    day: WeekdaysInterface["day"];
    launch: TypeOfLaunchInterface["typeOfLaunch"];
  };
}

const initialState: FoodMenuState = {
  settingsForMenu: { numberOfPeople: 0, daySelected: null },
  menu: { Ροφήματα: { Καφέδες: {} } },
  weekDaysWithItsLaunchTimes: {
    Monday: { breakfast: {}, launch: {}, snack: {}, dinner: {} },
    Tuesday: { breakfast: {}, launch: {}, snack: {}, dinner: {} },
    Wednesday: { breakfast: {}, launch: {}, snack: {}, dinner: {} },
    Thursday: { breakfast: {}, launch: {}, snack: {}, dinner: {} },
    Friday: { breakfast: {}, launch: {}, snack: {}, dinner: {} },
    Saturday: { breakfast: {}, launch: {}, snack: {}, dinner: {} },
    Sunday: { breakfast: {}, launch: {}, snack: {}, dinner: {} },
  },
  selectedDayAndTime: { day: "Monday", launch: "breakfast" },
};

const foodMenuSlice = createSlice({
  name: "FoodMenu",
  initialState,
  reducers: {
    parseMenu(state, action: PayloadAction<{ Ροφήματα: { Καφέδες: {} } }>) {
      state.menu = action.payload;
    },
    addFoodToDayAndTime(
      state,
      action: PayloadAction<{ name: string; recipe: {} }>,
    ) {
      // @ts-ignore
      state.weekDaysWithItsLaunchTimes[state.selectedDayAndTime.day][
        state.selectedDayAndTime.launch
      ][action.payload.name] = action.payload.recipe;
      localStorage.setItem(
        "weeklyMenu",
        JSON.stringify(state.weekDaysWithItsLaunchTimes),
      );
    },
    setSelectedDayAndTime(
      state,
      action: PayloadAction<FoodMenuState["selectedDayAndTime"]>,
    ) {
      state.selectedDayAndTime = action.payload;
    },
    setWeeklyMenu(
      state,
      action: PayloadAction<FoodMenuState["weekDaysWithItsLaunchTimes"]>,
    ) {
      state.weekDaysWithItsLaunchTimes = action.payload;
    },
    resetWeeklyMenu(state) {
      state.weekDaysWithItsLaunchTimes =
        initialState.weekDaysWithItsLaunchTimes;
    },
    removeFood(
      state,
      action: PayloadAction<{
        day: WeekdaysInterface["day"];
        typeOfMeal: TypeOfLaunchInterface["typeOfLaunch"];
        recipe: string;
      }>,
    ) {
      // @ts-ignore
      delete state.weekDaysWithItsLaunchTimes[action.payload.day][
        action.payload.typeOfMeal
      ][action.payload.recipe];
      localStorage.setItem(
        "weeklyMenu",
        JSON.stringify(state.weekDaysWithItsLaunchTimes),
      );
    },
  },
});

export const {
  removeFood,
  resetWeeklyMenu,
  setWeeklyMenu,
  setSelectedDayAndTime,
  parseMenu,
  addFoodToDayAndTime,
} = foodMenuSlice.actions;

export default foodMenuSlice.reducer;
