"use client";

import { Avatar, Box, Text } from "@yamada-ui/react";
import { RiGhost2Fill, RiGhost2Line } from "react-icons/ri";
import React, { useEffect, useState, useCallback } from "react";
import { useScary } from "@/app/_hooks/useScary";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type Props = {
  id: string;
  user: string;
  postDate: string;
  tag: string;
  title: string;
  scary: number;
  iconUrl: string | null;
};

export const PostCard = (props: Props) => {
  const { data: session } = useSession();
  const { toggleScary, checkScaryStatus } = useScary();
  const [scary, setScary] = useState(props.scary);
  const [isScary, setIsScary] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const checkStatus = useCallback(async () => {
    const status = await checkScaryStatus(props.id);
    setIsScary(status);
  }, [props.id, checkScaryStatus]);

  useEffect(() => {
    checkStatus();
  }, [checkStatus]);

  const handleTagClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (props.tag) {
      router.push(`/search?tag=${encodeURIComponent(props.tag)}`);
    }
  };

  const handleIconClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (!session) {
      return;
    }

    if (isLoading) return;
    setIsLoading(true);
    try {
      const result = await toggleScary(props.id);
      setScary(result.scaryCount);
      setIsScary(result.isScary);
    } catch (err) {
      console.error(
        "Failed to update scary status:",
        err instanceof Error ? err.message : err
      );
    } finally {
      setIsLoading(false);
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
        <Box onClick={handleTagClick}>
          <Text>#{props.tag}</Text>
        </Box>

        <Text>{props.postDate}</Text>
      </Box>
      <Box>
        <Text variant="h6" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Text>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Avatar size={"sm"} src={props.iconUrl || undefined} />
          <Text>{props.user}</Text>
        </Box>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Box
            onClick={handleIconClick}
            style={{
              cursor: "pointer",
              opacity: isLoading ? 0.5 : 1,
            }}
          >
            {isScary ? (
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
