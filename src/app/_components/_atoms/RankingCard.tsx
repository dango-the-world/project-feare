import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  id: number;
  user: string;
  postDate: string;
  tag: string;
  title: string;
};

export const RankingCard = (props: Props) => {
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
          <Typography>{props.tag}</Typography>
          <Typography>{props.postDate}</Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {props.title}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} gap={"5px"} alignItems={"center"}>
            <Avatar>A</Avatar>
            <Typography>{props.user}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
