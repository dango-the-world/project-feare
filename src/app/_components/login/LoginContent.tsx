import React from "react";
import { LoginCard } from "./LoginCard";
import { Box } from "@yamada-ui/react";

export const LoginContent = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"90vh"}
    >
      <LoginCard />
    </Box>
  );
};
