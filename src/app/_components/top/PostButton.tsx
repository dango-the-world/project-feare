import React from "react";
import { IconButton, Box } from "@yamada-ui/react";
import { MdAdd } from "react-icons/md";
import Link from "next/link";

const PostButton = () => {
  return (
    <Link href={"/create_post"}>
      <Box position="fixed" bottom="16px" right="16px">
        <IconButton
          colorScheme="blue"
          size="lg"
          aria-label="add"
          icon={<MdAdd />}
        />
      </Box>
    </Link>
  );
};

export default PostButton;
