"use client";

import { Box, useBreakpointValue } from "@yamada-ui/react";
import React from "react";
import { SignupCard } from "./SignupCard";

export const SignupContent = () => {
  const boxWidth = useBreakpointValue({ base: "60vw", sm: "90%" });

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={boxWidth}
      height={"90vh"}
      margin={"auto"}
    >
      <SignupCard />
    </Box>
  );
};
