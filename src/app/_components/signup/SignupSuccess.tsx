"use client";

import { Box, Button, Text } from "@yamada-ui/react";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const SignupSuccess = () => {
  const { data: session } = useSession();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap="20px"
    >
      <Text fontSize={"1.2rem"}>ようこそ、{session?.user?.name}!</Text>
      <Link href={"/"}>
        <Button>怖い話を見る</Button>
      </Link>
    </Box>
  );
};

export default SignupSuccess;
