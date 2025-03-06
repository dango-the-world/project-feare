"use client";

import { useSearchResults } from "@/app/_hooks/useFetchResult";
import { Box } from "@yamada-ui/react";
import React from "react";
import { PostCard } from "../PostCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTagSearch } from "@/app/_hooks/useTagSearch";
import { FetchPost } from "@/app/_interfaces/fetchPostInterface";

export const ResultContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const tag = searchParams.get("tag") || "";

  const { results: keywordResults } = useSearchResults(query);
  const { results: tagResults } = useTagSearch(tag);

  let results: FetchPost[] = [];

  if (query) {
    results = keywordResults;
  } else if (tag) {
    results = tagResults;
  }

  if (!results.length) return <p>検索結果がありません</p>;

  return (
    <Box width={"1000px"} margin={"100px auto"}>
      {results.map((index) => (
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
