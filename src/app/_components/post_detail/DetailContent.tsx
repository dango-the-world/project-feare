"use client";

import React from "react";
// import { DetailImage } from "./DetailImage";
import { DetailDisplay } from "./DetailDisplay";
import { Box, useBreakpointValue } from "@yamada-ui/react";

export const DetailContent = () => {
  const boxWidth = useBreakpointValue({ base: "800px", sm: "90%" });
  return (
    <Box width={boxWidth} margin={"100px auto"}>
      <DetailDisplay />
    </Box>
  );
};
