import React from "react";
import { RankingArea } from "./RankingArea";
import { RecommendArea } from "./RecommendArea";
import PostButton from "./PostButton";
import { Box } from "@yamada-ui/react";

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
