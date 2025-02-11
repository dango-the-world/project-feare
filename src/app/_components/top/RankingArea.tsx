"use client";

import React from "react";
import { RankingCard } from "./RankingCard";
import useFetchPopular from "@/app/_hooks/useFetchPopular";
import Link from "next/link";
import { Box, Text } from "@yamada-ui/react";

export const RankingArea = () => {
  const { popularPost } = useFetchPopular();
  return (
    <>
      <Box p={"20px"}>
        <Text variant="h6" py={"10px"}>
          ランキング
        </Text>

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
