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
import { useRouter } from "next/navigation";
import { useKeyword } from "@/app/_hooks/useKeyword";
import { useModalClose } from "@/app/_hooks/useModalClose";

export const SearchButton = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const { keyword, setKeyword } = useKeyword();
  const router = useRouter();

  useModalClose(onClose);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();

    if (keyword.trim()) {
      router.push(`/search?query=${encodeURIComponent(keyword)}`);
      setKeyword("");
    }
  };

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
        <Box as="form" onSubmit={handleSearch}>
          <Input
            padding={"20px"}
            bgColor={"#111827"}
            placeholder="ワードで検索"
            borderColor="#680c62"
            sx={{ _placeholder: { color: "#555" } }}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Box>
      </Modal>
    </Box>
  );
};
