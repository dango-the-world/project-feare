"use client";

import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#003659",
    },
    secondary: {
      main: "#003659",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default darkTheme;
