"use client";

import React from "react";
import useFetchPopular from "@/app/_hooks/useFetchPopular";
import Link from "next/link";
import { Box } from "@yamada-ui/react";
import { PostCard } from "./PostCard";

export const RankingArea = () => {
  const { popularPost } = useFetchPopular();
  return (
    <>
      <Box p={"20px"}>
        <Box>
          {popularPost.map((index) => (
            <Link
              href={"/post_detail"}
              key={index.id}
              style={{
                textDecoration: "none",
                color: "#eeeeee",
              }}
            >
              <PostCard
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
