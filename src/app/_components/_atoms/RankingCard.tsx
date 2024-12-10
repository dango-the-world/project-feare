import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export const RankingCard = () => {
  return (
    <>
      <Box
        display={"flex"}
        width={"300px"}
        height={"200px"}
        padding={"10px"}
        bgcolor={"#444"}
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "10px",
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>#test</Typography>
          <Typography>1日前</Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            TEST:たのしくあそびましょう
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} gap={"5px"} alignItems={"center"}>
            <Avatar>A</Avatar>
            <Typography>aaaaaaa</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
