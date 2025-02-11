import React from "react";
// import { DetailImage } from "./DetailImage";
import { DetailDisplay } from "./DetailDisplay";
import { Box } from "@yamada-ui/react";

export const DetailContent = () => {
  return (
    <Box width={"800px"} margin={"auto"}>
      {/* <DetailImage /> */}
      <DetailDisplay />
    </Box>
  );
};
