import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isVisible: boolean;
  typeOfModal: "menu" | "recipeInfo" | "totalOfDay" | null;
}

const initialState: ModalState = {
  isVisible: false,
  typeOfModal: null,
};

const modalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    toggleVisibilityOfModal(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
    setTypeOfModal(state, action: PayloadAction<ModalState["typeOfModal"]>) {
      state.typeOfModal = action.payload;
    },
  },
});

export const { toggleVisibilityOfModal, setTypeOfModal } = modalSlice.actions;

export default modalSlice.reducer;
