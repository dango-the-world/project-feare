import { Box } from "@mui/material";
import React from "react";
import { DetailImage } from "./DetailImage";
import { DetailDisplay } from "./DetailDisplay";

export const DetailContent = () => {
  return (
    <Box width={"800px"} margin={"auto"}>
      <DetailImage />
      <DetailDisplay />
    </Box>
  );
};
