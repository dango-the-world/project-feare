"use client";

import { Flex, Box, Button, Image, Avatar } from "@yamada-ui/react";
import React from "react";
import Link from "next/link";
import { SearchButton } from "./SearchButton";
import { useHeaderSession } from "@/app/_hooks/useHeaderSession";

export const Header = () => {
  const { session } = useHeaderSession();

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
              <Link href="/auth/signup">
                <Button height="40px" px={4} colorScheme="blue">
                  サインアップ
                </Button>
              </Link>
            </Box>
          ) : (
            <Avatar src={session?.user.image ?? undefined} />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
