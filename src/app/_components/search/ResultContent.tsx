"use client";

import { useSearchResults } from "@/app/_hooks/useFetchResult";
import {
  Box,
  Button,
  HStack,
  Text,
  useBreakpointValue,
} from "@yamada-ui/react";
import React, { useState } from "react";
import { PostCard } from "../PostCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTagSearch } from "@/app/_hooks/useTagSearch";
import { FetchPost } from "@/app/_interfaces/fetchPostInterface";

export const ResultContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const tag = searchParams.get("tag") || "";

  const [page, setPage] = useState(1);
  const { results: keywordResults, totalPages } = useSearchResults(query, page);
  const { results: tagResults } = useTagSearch(tag);

  let results: FetchPost[] = [];

  if (query) {
    results = keywordResults;
  } else if (tag) {
    results = tagResults;
  }

  const boxWidth = useBreakpointValue({ base: "1000px", sm: "90%" });

  return (
    <Box width={boxWidth} margin={"100px auto"}>
      <Text fontSize={"1.4rem"}>検索結果: {results.length}件</Text>
      {!results.length ? (
        <p>検索結果がありません</p>
      ) : (
        <>
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

          {/* ページネーションボタン */}
          <HStack justifyContent="center" mt="4">
            <Button onClick={() => setPage(page - 1)} isDisabled={page === 1}>
              前のページ
            </Button>
            <Text>
              {page} / {totalPages}
            </Text>
            <Button
              onClick={() => setPage(page + 1)}
              isDisabled={page >= totalPages}
            >
              次のページ
            </Button>
          </HStack>
        </>
      )}
    </Box>
  );
};
