import { Avatar, Box, Text } from "@yamada-ui/react";
import React from "react";

type Props = {
  id: string;
  user: string;
  postDate: string;
  tag: string;
  title: string;
};

export const PostCard = (props: Props) => {
  return (
    <>
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
        </Box>
      </Box>
    </>
  );
};
