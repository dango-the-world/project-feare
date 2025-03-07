"use client";
import React from "react";
import { PostCard } from "../PostCard";
import useFetchPost from "@/app/_hooks/useFetchPost";
import Link from "next/link";
import { Box, Loading } from "@yamada-ui/react";

export const RecommendArea = () => {
  const { newPost, loading } = useFetchPost();

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
    <>
      <Box p={"20px"}>
        <Box>
          {newPost.map((index) => (
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
      </Box>
    </>
  );
};
