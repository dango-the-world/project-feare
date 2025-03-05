"use client";

import {
  Box,
  Input,
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@yamada-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchButton = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        transition={"0.3s"}
        as="span"
        color="white"
        _hover={{ color: "gray.400", cursor: "pointer" }}
        onClick={onOpen}
      >
        <FaSearch size="24px" />
      </Box>

      <Modal
        open={open}
        onClose={onClose}
        placement={"top"}
        size={"6xl"}
        bgColor={"#111827"}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <Input
          padding={"10px"}
          bgColor={"#111827"}
          placeholder="ワードで検索"
          borderColor="#680c62"
          sx={{
            _placeholder: { color: "#555" },
          }}
        />
      </Modal>
    </Box>
  );
};
