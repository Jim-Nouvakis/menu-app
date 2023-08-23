import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeOfLaunchInterface, WeekdaysInterface } from "../../interfaces";

interface FoodMenuState {
  settingsForMenu: {
    numberOfPeople: number;
    daySelected: string | null;
  };
  menu: {};
  weekDaysWithItsLaunchTimes: {
    Monday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Tuesday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Wednesday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Thursday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Friday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Saturday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
    Sunday: { breakfast: {}; launch: {}; snack: {}; dinner: {} };
  };
  selectedDayForTotalOfIngredients: WeekdaysInterface["day"] | "week" | null;
  selectedDayAndTime: {
    day: WeekdaysInterface["day"];
    launch: TypeOfLaunchInterface["typeOfLaunch"];
  };
  requestedInfoAboutARecipe: {};
}

const initialState: FoodMenuState = {
  settingsForMenu: { numberOfPeople: 15, daySelected: null },
  menu: {},
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
  selectedDayForTotalOfIngredients: null,
  requestedInfoAboutARecipe: {},
};

const foodMenuSlice = createSlice({
  name: "FoodMenu",
  initialState,
  reducers: {
    parseMenu(state, action: PayloadAction<{}>) {
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
    setSelectedDayForTotal(
      state,
      action: PayloadAction<FoodMenuState["selectedDayForTotalOfIngredients"]>,
    ) {
      state.selectedDayForTotalOfIngredients = action.payload;
    },
    setNumberOfPeople(state, action: PayloadAction<number>) {
      state.settingsForMenu.numberOfPeople = action.payload;
    },
    getInfoAboutTheFoodThatWasSelected(
      state,
      action: PayloadAction<{
        day: WeekdaysInterface["day"];
        typeOfMeal: TypeOfLaunchInterface["typeOfLaunch"];
        recipe: string;
      }>,
    ) {
      let newObj = {};
      // @ts-ignore
      newObj[action.payload.recipe] = {
        // @ts-ignore
        ...state.weekDaysWithItsLaunchTimes[action.payload.day][
          action.payload.typeOfMeal
        ][action.payload.recipe],
      };
      state.requestedInfoAboutARecipe = newObj;
    },
  },
});

export const {
  setNumberOfPeople,
  setSelectedDayForTotal,
  getInfoAboutTheFoodThatWasSelected,
  removeFood,
  resetWeeklyMenu,
  setWeeklyMenu,
  setSelectedDayAndTime,
  parseMenu,
  addFoodToDayAndTime,
} = foodMenuSlice.actions;

export default foodMenuSlice.reducer;
