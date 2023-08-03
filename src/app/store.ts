import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import modalReducer from "../features/modal/modal-slice";

export const store = configureStore({
  reducer: { counter: counterReducer, modal: modalReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
