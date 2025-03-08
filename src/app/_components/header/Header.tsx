"use client";

import {
  Flex,
  Box,
  Button,
  Image,
  Avatar,
  ContextMenu,
  ContextMenuTrigger,
  MenuList,
  MenuItem,
  Modal,
  useDisclosure,
  Text,
} from "@yamada-ui/react";
import React from "react";
import Link from "next/link";
import { SearchButton } from "./SearchButton";
import { useHeaderSession } from "@/app/_hooks/useHeaderSession";
import { signOut } from "next-auth/react";

export const Header = () => {
  const { session } = useHeaderSession();
  const { open, onOpen, onClose } = useDisclosure();

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
            <ContextMenu>
              <ContextMenuTrigger>
                <Avatar src={session?.user.image ?? undefined} />
              </ContextMenuTrigger>

              <MenuList contentProps={{ bg: "#c10000" }}>
                <MenuItem onClick={onOpen}>ログアウト</MenuItem>

                <Modal
                  open={open}
                  size={"2xl"}
                  onClose={onClose}
                  bg={"#111827"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    gap={"20px"}
                    p={"40px"}
                  >
                    <Text>ログアウトしますか？</Text>
                    <Box display={"flex"} gap={"20px"}>
                      <Button>キャンセル</Button>
                      <Button
                        colorScheme={"danger"}
                        onClick={() => signOut({ callbackUrl: "/" })}
                      >
                        ログアウト
                      </Button>
                    </Box>
                  </Box>
                </Modal>
              </MenuList>
            </ContextMenu>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
