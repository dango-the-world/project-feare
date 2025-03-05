import { Flex, Box, Button, Image, Avatar } from "@yamada-ui/react";
import React from "react";
import Link from "next/link";
import { auth } from "../../../../auth";
import { SearchButton } from "./SearchButton";

export const Header = async () => {
  const session = await auth();

  return (
    <Box
      as="header"
      bg="#111827"
      boxShadow="0px 8px 12px rgba(0, 0, 0, 0.5)"
      p={3}
    >
      <Flex justify="space-around" align="center">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image w={"100px"} alt="FEARE" src="feare_logo_white.svg" />
        </Link>

        <Flex align="center" gap={5}>
          <SearchButton />
          {!session?.user ? (
            <Box>
              <Link href="/login">
                <Button variant="ghost" height="40px" px={4} color={"#fff"}>
                  ログイン
                </Button>
              </Link>
              <Button height="40px" px={4} colorScheme="blue">
                新規登録
              </Button>
            </Box>
          ) : (
            <Avatar src={session?.user.image ?? undefined} />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
