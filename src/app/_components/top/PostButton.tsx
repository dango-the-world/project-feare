import React from "react";
import { Fab, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

const PostButton = () => {
  return (
    <Link href={"/create_post"}>
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </Link>
  );
};

export default PostButton;
