import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#363a91",
    },
    secondary: {
      main: "#f1f0fa",
    },
    accent: {
      main: "#F0F7FF",
      light: "#f3f9ff",
    },
    warning: {
      main: "#ef5350",
    },
    success: {
      main: "#4caf50",
    },
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"],
  },
});
