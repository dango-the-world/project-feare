import { Box, Image } from "@yamada-ui/react";

import { auth } from "../../../../auth";
import { SignInButton, SignOutButton } from "./AuthButton";
import SignupSuccess from "./SignupSuccess";

export const SignupCard = async () => {
  const session = await auth();
  if (!session?.user)
    return (
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"20px"}
        w={"60vw"}
        backgroundColor={"#1F2937"}
        border={"3px solid #680c62"}
        borderRadius={"10px"}
      >
        <Image alt="" src="/feare_main_image.png" />
        <Box w={"100%"}>
          <SignInButton />
        </Box>
      </Box>
    );

  return (
    <Box>
      {session && (
        <>
          <SignupSuccess />
          <SignOutButton />
        </>
      )}
    </Box>
  );
};
