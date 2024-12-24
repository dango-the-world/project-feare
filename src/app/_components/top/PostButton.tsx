import React from "react";
import { Fab, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FloatingActionButton = () => {
  return (
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
  );
};

export default FloatingActionButton;
