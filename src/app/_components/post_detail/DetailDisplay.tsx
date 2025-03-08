"use client";

import { usePostDetail } from "@/app/_hooks/usePostDetail";
import { Avatar, Box, Loading, Text } from "@yamada-ui/react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { RiGhost2Fill, RiGhost2Line } from "react-icons/ri";

export const DetailDisplay = () => {
  const params = useParams();
  const postId = params.id as string;
  const { post, scary, isScary, isLoading, handleIconClick, loading } =
    usePostDetail(postId);
  const router = useRouter();

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    if (tag) {
      router.push(`/search?tag=${encodeURIComponent(tag)}`);
    }
  };

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

  if (!post) return <Text>投稿が見つかりません。</Text>;

  return (
    <Box padding={"20px"} backgroundColor={"#1F2937"} borderRadius={"20px"}>
      <Box
        transition={"0.3s"}
        _hover={{ color: "gray.400", cursor: "pointer" }}
        onClick={(e) => handleTagClick(e, post.tags)}
      >
        <Text>#{post.tags}</Text>
      </Box>
      <Text lineHeight={"4rem"} fontSize={"2rem"} fontWeight={"bold"}>
        {post.title}
      </Text>
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <Avatar size={"sm"} src={post.user.iconUrl || undefined} />
        <Text>{post.user.username}</Text>
      </Box>

      <Box margin={"40px 0"}>
        <Text>{post.content}</Text>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        onClick={handleIconClick}
        style={{
          cursor: isLoading ? "not-allowed" : "pointer",
          opacity: isLoading ? 0.5 : 1,
        }}
      >
        {isScary ? (
          <RiGhost2Fill size={32} color="purple" />
        ) : (
          <RiGhost2Line size={32} />
        )}
        <Text>{scary}</Text>
      </Box>
    </Box>
  );
};
