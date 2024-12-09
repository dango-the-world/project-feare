"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import darkTheme from "../../_theme/darkTheme";

const headerDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E6EDF3",
    },
    secondary: {
      main: "#003659",
    },
  },
});

export const Header = () => {
  return (
    <ThemeProvider theme={headerDarkTheme}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"10px"}
        bgcolor={headerDarkTheme.palette.secondary.main}
      >
        <Typography variant="h4" color="#fff">
          FEARE
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={"20px"}>
          <TextField
            size="small"
            sx={{ width: "400px" }}
            label="Search"
            variant="outlined"
          />
          <Button sx={{ height: "40px", padding: "10px" }} variant="text">
            ログイン
          </Button>
          <Button sx={{ height: "40px", padding: "10px" }} variant="contained">
            新規登録
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
