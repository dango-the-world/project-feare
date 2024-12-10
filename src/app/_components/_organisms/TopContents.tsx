import { Box } from "@mui/material";
import React from "react";
import { RankingArea } from "../_molecules/RankingArea";
import { RecommendArea } from "../_molecules/RecommendArea";

export const TopContents = () => {
  return (
    <>
      <Box width={"1000px"} margin={"auto"}>
        <RankingArea />
        <RecommendArea />
      </Box>
    </>
  );
};
