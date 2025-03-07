"use client";

import { useCreatePost } from "@/app/_hooks/useCreatePost";
import {
  Box,
  Button,
  FormControl,
  Input,
  Textarea,
  Text,
  Select,
  useBreakpointValue,
} from "@yamada-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type SelectItem = { label: string; value: string };

export const PostForm = () => {
  const { createPost, isLoading, error } = useCreatePost();
  const router = useRouter();
  // フォームの状態
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const inputWidth = useBreakpointValue({ base: "80%", sm: "90%" });

  // タグの選択肢
  const items: SelectItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "ベジータ", value: "ベジータ" },
    { label: "フリーザ", value: "フリーザ" },
  ];

  const handleSubmit = async () => {
    if (!title || !content || !selectedTag) {
      alert("タイトル、本文、タグをすべて入力してください。");
      return;
    }

    try {
      await createPost({ title, content, tags: selectedTag });
      alert("投稿が完了しました！");
      router.push("/"); // 成功したらルートに移動
    } catch (err) {
      alert("投稿に失敗しました。");
    }
  };

  return (
    <Box
      bg="gray.800"
      w={"100%"}
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

      <Box width={inputWidth}>
        <Input
          placeholder="タイトル"
          padding={"20px"}
          bgColor={"#111827"}
          borderColor="#680c62"
          value={title}
          sx={{ _placeholder: { color: "#555" } }}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      <Box width={inputWidth}>
        <Textarea
          placeholder="本文"
          minHeight="200px"
          padding={"20px"}
          bgColor={"#111827"}
          borderColor="#680c62"
          sx={{ _placeholder: { color: "#555" } }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Box>

      <Box width={inputWidth}>
        <FormControl width="100%">
          <Select
            placeholder="タグを選択"
            width="100%"
            size="lg"
            bgColor={"#111827"}
            borderColor="#680c62"
            sx={{ _placeholder: { color: "#555" } }}
            value={selectedTag}
            items={items}
            contentProps={{ bg: "#111827" }}
            optionProps={{
              transition: "0.3s",
              bg: "#111827",
              p: "20px",
              color: "white",
              borderColor: "#680c62",
              _hover: { bg: "#444" },
              _selected: {
                bg: "#444", // 選択時の背景色
                color: "white",
              },
            }}
            onChange={(value: string) => setSelectedTag(value)}
          ></Select>
        </FormControl>
      </Box>

      {error && (
        <Text color="red.500" fontSize="sm">
          投稿に失敗しました: {error}
        </Text>
      )}

      <Box width="100%" display="flex" justifyContent="center">
        <Button
          width={inputWidth}
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
