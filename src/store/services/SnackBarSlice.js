import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "snackbarSlice",
  initialState: {
    snackbarOpen: false,
    snackbarType: "",
    snackbarMessage: "",
  },

  reducers: {
    setSnackbar(state, action) {
      const { snackbarOpen, snackbarType, snackbarMessage } = action.payload;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage,
      };
    },
  },
});
const { setSnackbar } = snackbarSlice.actions;
export { setSnackbar };
export default snackbarSlice;
