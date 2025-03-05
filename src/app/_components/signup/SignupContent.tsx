import { Box } from "@yamada-ui/react";
import React from "react";
import { SignupCard } from "./SignupCard";

export const SignupContent = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"90vh"}
    >
      <SignupCard />
    </Box>
  );
};
