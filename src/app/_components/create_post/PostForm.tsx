import {
  Box,
  Button,
  FormControl,
  Label,
  Select,
  Input,
  Textarea,
  Text,
} from "@yamada-ui/react";
import React from "react";

export const PostForm = () => {
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
        />
      </Box>

      <Box width="80%">
        <Textarea
          placeholder="本文"
          minHeight="200px"
          width="100%"
          bg="gray.700"
          color="white"
        />
      </Box>

      <Box width="80%">
        <input
          accept="image/*"
          id="image-upload"
          type="file"
          style={{ display: "none" }}
        />
        <label htmlFor="image-upload">
          <Button as="span" width="100%" py="10px" color="white" bg="gray.700">
            イメージを投稿
          </Button>
        </label>
      </Box>

      <Box width="80%">
        <FormControl width="100%">
          <Label color="white">タグ</Label>
          <Select placeholder="タグ">
            <option value={10}>創作</option>
            <option value={20}>日常</option>
            <option value={30}>悪夢</option>
            <option value={40}>怪談</option>
          </Select>
        </FormControl>
      </Box>

      <Box width="100%" display="flex" justifyContent="center">
        <Button width="80%" py="10px" color="white" bg="#680c62">
          投稿
        </Button>
      </Box>
    </Box>
  );
};
