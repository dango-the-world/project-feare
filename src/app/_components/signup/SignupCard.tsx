"use client";

import { Box, Button, Image, Text, useBreakpointValue } from "@yamada-ui/react";

import SignupSuccess from "./SignupSuccess";
import { signIn, useSession } from "next-auth/react";

export const SignupCard = () => {
  const { data: session } = useSession();
  const responsiveFlex = useBreakpointValue({ base: "flex", sm: "block" });
  const responsiveRounded = useBreakpointValue({
    base: "10px 0 0 10px",
    sm: "0",
  });

  if (!session?.user)
    return (
      <Box
        display={responsiveFlex}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"20px"}
        w={"100%"}
        backgroundColor={"#1F2937"}
        borderRadius={"10px"}
      >
        <Image
          borderRadius={responsiveRounded}
          w={"100%"}
          alt=""
          src="/feare_main_image.png"
        />
        <Box
          w={"100%"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"20px"}
          p={"20px"}
        >
          <Text fontSize={"1.4rem"} fontWeight={"bold"}>
            ログイン
          </Text>
          <Button w={"90%"} m={"auto"} onClick={() => signIn()}>
            GitHubでログイン
          </Button>
        </Box>
      </Box>
    );

  return (
    <Box>
      {session && (
        <>
          <SignupSuccess />
        </>
      )}
    </Box>
  );
};
