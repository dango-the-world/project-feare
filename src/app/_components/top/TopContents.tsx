import { Box } from "@mui/material";
import React from "react";
import { RankingArea } from "./RankingArea";
import { RecommendArea } from "./RecommendArea";
import PostButton from "./PostButton";

export const TopContents = () => {
  return (
    <>
      <Box width={"1000px"} margin={"20px auto"}>
        <RankingArea />
        <RecommendArea />
        <PostButton />
      </Box>
    </>
  );
};
