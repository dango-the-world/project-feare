import { Box, Button, Text } from "@yamada-ui/react";
import React from "react";
import { auth } from "../../../../auth";
import Link from "next/link";

const SignupSuccess = async () => {
  const session = await auth();

  return (
    <Box>
      <Text>ようこそ、{session?.user?.name}!</Text>
      <Link href={"/"}>
        <Button>怖い話を見る</Button>
      </Link>
    </Box>
  );
};

export default SignupSuccess;
