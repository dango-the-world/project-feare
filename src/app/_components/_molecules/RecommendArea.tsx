import { Box, Typography } from "@mui/material";
import React from "react";
import { PostCard } from "../_atoms/PostCard";
import { rankingList } from "@/app/_mock/mockRankingList";

export const RecommendArea = () => {
  return (
    <>
      <Box p={"20px"}>
        <Typography variant="h6" py={"10px"}>
          おすすめの投稿
        </Typography>
        <Box>
          {rankingList.map((index) => (
            <PostCard
              key={index.id}
              id={index.id}
              user={index.user}
              postDate={index.postDate}
              tag={index.tag}
              title={index.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
