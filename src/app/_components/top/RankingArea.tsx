import { Box, Typography } from "@mui/material";
import React from "react";
import { RankingCard } from "../_atoms/RankingCard";
import { rankingList } from "@/app/_mock/mockRankingList";
import Link from "next/link";

export const RankingArea = () => {
  return (
    <>
      <Box p={"20px"}>
        <Typography variant="h6" py={"10px"}>
          ランキング
        </Typography>

        <Box display={"flex"} gap={"10px"} justifyContent={"space-between"}>
          {rankingList.map((index) => (
            <RankingCard
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
