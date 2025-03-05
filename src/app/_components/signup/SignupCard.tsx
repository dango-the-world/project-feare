import { Box, Button } from "@yamada-ui/react";

import { auth, signOut } from "../../../../auth";
import { SignInButton, SignOutButton } from "./AuthButton";

export const SignupCard = async () => {
  const session = await auth();
  if (!session?.user) return <SignInButton />;

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

      {session && (
        <>
          <p>{session.user.email}</p>
          <SignOutButton />
        </>
      )}
    </Box>
  );
};
