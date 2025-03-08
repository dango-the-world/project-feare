"use client";

import React from "react";
import useFetchPopular from "@/app/_hooks/useFetchPopular";
import Link from "next/link";
import { Box, Loading } from "@yamada-ui/react";
import { PostCard } from "../PostCard";

export const RankingArea = () => {
  const { popularPost, loading } = useFetchPopular();

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={"50px"}
      >
        <Loading variant="dots" fontSize="6xl" />
      </Box>
    );
  }

  return (
    <Box>
      {popularPost.map((index) => (
        <Link
          href={`/post_detail/${index.id}`}
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
            scary={index.scaryCount}
            iconUrl={index.user.iconUrl}
          />
        </Link>
      ))}
    </Box>
  );
};
