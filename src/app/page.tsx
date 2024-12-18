import { Box } from "@mui/material";
import React from "react";
import { TopContents } from "./_components/_organisms/TopContents";
import FloatingActionButton from "./_components/_atoms/PostButton";

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
