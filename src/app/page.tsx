import React from "react";
import { TopContents } from "./_components/top/TopContents";
import { Box } from "@yamada-ui/react";

const page = () => {
  return (
    <>
      <Box bgColor={"#111827"} margin={"0"}>
        <TopContents />
      </Box>
    </>
  );
};

export default page;
