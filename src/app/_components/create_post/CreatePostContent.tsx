import { Box } from "@mui/material";
import React from "react";
import { PostForm } from "./PostForm";

export const CreatePostContent = () => {
  return (
    <Box width={"1000px"} margin={"20px auto"}>
      <PostForm />
    </Box>
  );
};
