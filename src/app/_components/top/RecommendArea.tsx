"use client";
import React from "react";
import { PostCard } from "./PostCard";
import useFetchPost from "@/app/_hooks/useFetchPost";
import Link from "next/link";
import { Box } from "@yamada-ui/react";

export const RecommendArea = () => {
  const { newPost } = useFetchPost();

  return (
    <>
      <Box p={"20px"}>
        <Box>
          {newPost.map((index) => (
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
