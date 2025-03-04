"use client";

import { Box, Button } from "@yamada-ui/react";
import { signIn } from "next-auth/react";

export const SignupCard = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"20px"}
      width={"500px"}
      height={"500px"}
      backgroundColor={"#1F2937"}
      border={"3px solid #680c62"}
      borderRadius={"10px"}
    >
      {/* <Button text="Googleでログイン" onClick={() => signIn("google")} /> */}
      <Button text="Githubでログイン" onClick={() => signIn("github")} />
    </Box>
  );
};
