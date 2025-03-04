"use client";

import { Avatar, Box, Text } from "@yamada-ui/react";
import { RiGhost2Fill, RiGhost2Line } from "react-icons/ri";
import React, { useState } from "react";
import { useScary } from "@/app/_hooks/useScary";

type Props = {
  id: string;
  user: string;
  postDate: string;
  tag: string;
  title: string;
  scary: number;
};

export const PostCard = (props: Props) => {
  const { addScary } = useScary();
  const [scary, setScary] = useState(props.scary);
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (isClicked) return; // 連続クリック防止

    try {
      const updatedScary = await addScary(props.id);
      setScary(updatedScary);
      setIsClicked(true); // アイコンを切り替え
    } catch (err) {
      console.error(
        "Failed to update scary count:",
        err instanceof Error ? err.message : err
      );
    }
  };

  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"150px"}
      padding={"10px"}
      mb={"10px"}
      border={"3px solid #680c62"}
      backgroundColor={"#1F2937"}
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "10px",
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text>#{props.tag}</Text>
        <Text>{props.postDate}</Text>
      </Box>
      <Box>
        <Text variant="h6" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Text>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Avatar size={"sm"} />
          <Text>{props.user}</Text>
        </Box>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Box onClick={handleIconClick} style={{ cursor: "pointer" }}>
            {isClicked ? (
              <RiGhost2Fill size={32} color="purple" />
            ) : (
              <RiGhost2Line size={32} />
            )}
          </Box>
          {scary}
        </Box>
      </Box>
    </Box>
  );
};
