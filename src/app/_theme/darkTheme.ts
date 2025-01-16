"use client";

import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E6EDF3",
    },
    secondary: {
      main: "#111827",
    },
    background: {
      default: "#111827",
      paper: "#111827",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default darkTheme;
