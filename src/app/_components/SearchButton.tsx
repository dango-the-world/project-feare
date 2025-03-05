"use client";

import { Box, Input, Modal, useDisclosure } from "@yamada-ui/react";
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

      <Modal open={open} onClose={onClose} placement={"top"} size={"6xl"}>
        <Box w={"70%"} h={"400px"}>
          <Input />
        </Box>
      </Modal>
    </Box>
  );
};
