"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { RankingCard } from "./RankingCard";
import useFetchPopular from "@/app/_hooks/useFetchPopular";
import Link from "next/link";

export const RankingArea = () => {
  const { popularPost } = useFetchPopular();
  return (
    <>
      <Box p={"20px"}>
        <Typography variant="h6" py={"10px"}>
          ランキング
        </Typography>

        <Box display={"flex"} gap={"10px"} justifyContent={"left"}>
          {popularPost.map((index) => (
            <Link
              href={"/post_detail"}
              key={index.id}
              style={{
                textDecoration: "none",
                color: "#eeeeee",
              }}
            >
              <RankingCard
                id={index.id}
                user={index.user.username}
                postDate={index.createdAt}
                tag={index.tags}
                title={index.title}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};
