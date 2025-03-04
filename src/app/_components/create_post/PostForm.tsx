"use client";

import { useCreatePost } from "@/app/_hooks/useCreatePost";
import {
  Box,
  Button,
  FormControl,
  Input,
  Textarea,
  Text,
} from "@yamada-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const PostForm = () => {
  const { createPost, isLoading, error } = useCreatePost();
  const router = useRouter(); // 追加

  // フォームの状態
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setSelectedTag] = useState("");

  const handleSubmit = async () => {
    if (!title || !content || !tags) {
      alert("タイトル、本文、タグをすべて入力してください。");
      return;
    }

    try {
      await createPost({ title, content, tags });
      alert("投稿が完了しました！");
      router.push("/"); // 成功したらルートに移動
    } catch (err) {
      alert("投稿に失敗しました。");
    }
  };

  return (
    <Box
      bg="gray.800"
      border="3px solid #680c62"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="30px"
      py="40px"
      my="60px"
      borderRadius="10px"
    >
      <Text fontSize="xl" color="white">
        怖い話を投稿
      </Text>

      <Box width="80%">
        <Input
          placeholder="タイトル"
          width="100%"
          bg="gray.700"
          color="white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      <Box width="80%">
        <Textarea
          placeholder="本文"
          minHeight="200px"
          width="100%"
          bg="gray.700"
          color="white"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Box>

      <Box width="80%">
        <FormControl width="100%">
          <Input
            placeholder="タグ"
            width="100%"
            bg="gray.700"
            color="white"
            value={tags}
            onChange={(e) => setSelectedTag(e.target.value)}
          />
        </FormControl>
      </Box>

      {error && (
        <Text color="red.500" fontSize="sm">
          投稿に失敗しました: {error}
        </Text>
      )}

      <Box width="100%" display="flex" justifyContent="center">
        <Button
          width="80%"
          py="10px"
          color="white"
          bg="#680c62"
          onClick={handleSubmit}
          isDisabled={isLoading}
        >
          {isLoading ? "投稿中..." : "投稿"}
        </Button>
      </Box>
    </Box>
  );
};
