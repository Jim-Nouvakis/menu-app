import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modal/modal-slice";
import settingsReducer from "../features/settings/settings-slice";
import menuReducer from "../features/foodMenu/foodMenu-slice";
import pdfGeneratorReducer from "../features/pdfGenerator/pdrGeneratorSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    settings: settingsReducer,
    menu: menuReducer,
    pdfGenerator: pdfGeneratorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
