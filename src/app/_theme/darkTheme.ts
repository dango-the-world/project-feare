"use client";

import { extendTheme } from "@yamada-ui/react";

const darkTheme = extendTheme({
  config: {
    initialColorMode: "dark", // デフォルトでダークモード
  },
  colors: {
    primary: { 500: "#E6EDF3" },
    secondary: { 500: "#111827" },
    background: { default: "#111827", paper: "#111827" },
  },
  fonts: {
    body: "Roboto, Arial, sans-serif",
  },
});

export default darkTheme;
