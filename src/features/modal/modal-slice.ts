import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isVisible: boolean;
  typeOfModal: "menu" | null;
}

const initialState: ModalState = {
  isVisible: false,
  typeOfModal: null,
};

const modalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    toggleVisibility(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
    setTypeOfModal(state, action: PayloadAction<"menu" | null>) {
      state.typeOfModal = action.payload;
    },
  },
});

export const { toggleVisibility, setTypeOfModal } = modalSlice.actions;

export default modalSlice.reducer;
