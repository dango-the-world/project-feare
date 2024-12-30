import { Box } from "@mui/material";
import React from "react";
import FloatingActionButton from "./_components/top/PostButton";
import { TopContents } from "./_components/top/TopContents";

const page = () => {
  return (
    <>
      <Box>
        <TopContents />
        <FloatingActionButton />
      </Box>
    </>
  );
};

export default page;
