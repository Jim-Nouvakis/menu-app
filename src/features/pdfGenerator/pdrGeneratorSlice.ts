import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PdrGeneratorState {
  isVisible: boolean;
}

const initialState: PdrGeneratorState = {
  isVisible: false,
};

const pdfGeneratorSlice = createSlice({
  name: "PdfGenerator",
  initialState,
  reducers: {
    toggleVisibilityOfPdfGenerator(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleVisibilityOfPdfGenerator } = pdfGeneratorSlice.actions;

export default pdfGeneratorSlice.reducer;
