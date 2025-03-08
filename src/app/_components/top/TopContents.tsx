"use client";

import React, { useEffect, useState } from "react";
import { RankingArea } from "./RankingArea";
import { RecommendArea } from "./RecommendArea";
import PostButton from "./PostButton";
import { Box, Tab, TabPanel, Tabs, useBreakpointValue } from "@yamada-ui/react";

export const TopContents = () => {
  const [isClient, setIsClient] = useState(false);

  const boxWidth = useBreakpointValue({ base: "1000px", sm: "90%" });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // クライアントサイドでのみレンダリングする
  }

  return (
    <Box width={boxWidth} margin={"100px auto"}>
      {/* <RankingArea /> */}

      <Tabs>
        <Tab color={"#fff"}>新しい投稿</Tab>
        <Tab color={"#fff"}>人気の投稿</Tab>

        <TabPanel>
          <RecommendArea />
        </TabPanel>
        <TabPanel>
          <RankingArea />
        </TabPanel>
      </Tabs>

      <PostButton />
    </Box>
  );
};
