import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isVisible: boolean;
}

const initialState: ModalState = {
  isVisible: false,
};

const modalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    toggleVisibility(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
  },
});

export const { toggleVisibility } = modalSlice.actions;

export default modalSlice.reducer;
