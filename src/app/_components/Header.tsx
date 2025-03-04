"use client";

import { Flex, Box, Button, Input, Text, Avatar } from "@yamada-ui/react";
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <Box
      as="header"
      bg="#111827"
      boxShadow="0px 8px 12px rgba(0, 0, 0, 0.5)"
      p={3}
    >
      <Flex justify="space-between" align="center">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            FEARE
          </Text>
        </Link>
        <Input placeholder="検索" width="400px" />
        {/* <Flex align="center" gap={5}>
          <Link href="/login">
            <Button variant="ghost" height="40px" px={4} color={"#fff"}>
              ログイン
            </Button>
          </Link>
          <Button height="40px" px={4} colorScheme="blue">
            新規登録
          </Button>
        </Flex> */}
        <Avatar />
      </Flex>
    </Box>
  );
};
