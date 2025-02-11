"use client";

import useFetchDetail from "@/app/_hooks/useFetchDetail";
import { Avatar, Box, Text } from "@yamada-ui/react";
import { useParams } from "next/navigation";
import React from "react";

export const DetailDisplay = () => {
  const params = useParams();
  const postId = params.id as string;
  const { postDetail } = useFetchDetail(postId);

  return (
    <Box>
      {postDetail.map((index) => (
        <Box padding={"40px 0"} key={index.id}>
          <Text>#{index.tags}</Text>
          <Text lineHeight={"4rem"} fontSize={"2rem"} fontWeight={"bold"}>
            {index.title}
          </Text>
          {/* <Box></Box> */}
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Avatar size={"sm"} />
            <Text>{index.user.username}</Text>
          </Box>

          <Box margin={"40px 0"}>
            <Text>{index.content}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
