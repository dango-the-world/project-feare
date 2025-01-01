"use client";

import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#111827",
    },
    secondary: {
      main: "#111827",
    },
    background: {
      default: "#111827", // 背景色を設定
      paper: "#111827", // カードやコンテナの背景色
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default darkTheme;
