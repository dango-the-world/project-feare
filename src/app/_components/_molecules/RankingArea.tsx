import { Box, Typography } from "@mui/material";
import React from "react";
import { RankingCard } from "../_atoms/RankingCard";

export const RankingArea = () => {
  return (
    <>
      <Box p={"20px"}>
        <Typography variant="h4" py={"10px"}>
          Ranking
        </Typography>

        <Box display={"flex"} gap={"10px"} justifyContent={"space-between"}>
          <RankingCard />
          <RankingCard />
          <RankingCard />
          <RankingCard />
        </Box>
      </Box>
    </>
  );
};
