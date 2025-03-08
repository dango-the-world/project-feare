"use client";

import React from "react";
import { PostForm } from "./PostForm";
import { Box, useBreakpointValue } from "@yamada-ui/react";

export const CreatePostContent = () => {
  const boxWidth = useBreakpointValue({ base: "1000px", sm: "90%" });

  return (
    <Box width={boxWidth} margin={"20px auto"}>
      <PostForm />
    </Box>
  );
};
