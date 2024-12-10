import { Box, Typography } from "@mui/material";
import React from "react";
import { PostCard } from "../_atoms/PostCard";

export const RecommendArea = () => {
  return (
    <>
      <Box p={"20px"}>
        <Typography variant="h4" py={"10px"}>
          Ranking
        </Typography>
        <Box>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Box>
      </Box>
    </>
  );
};
