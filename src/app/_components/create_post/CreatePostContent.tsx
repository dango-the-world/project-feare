import React from "react";
import { PostForm } from "./PostForm";
import { Box } from "@yamada-ui/react";

export const CreatePostContent = () => {
  return (
    <Box width={"1000px"} margin={"20px auto"}>
      <PostForm />
    </Box>
  );
};
