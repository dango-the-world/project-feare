import { Box, Button, Input, Text } from "@yamada-ui/react";
import Link from "next/link";
import React from "react";

export const LoginCard = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"20px"}
      width={"500px"}
      height={"500px"}
      backgroundColor={"#1F2937"}
      border={"3px solid #680c62"}
      borderRadius={"10px"}
    >
      <Text variant="h5">ログイン</Text>

      <Box width={"80%"}>
        <Input
          placeholder="メールアドレス"
          size="small"
          sx={{
            width: "100%",
            bgcolor: "#313c4b",
            margin: "20px 0",
          }}
        />

        <Input
          placeholder="パスワード"
          type="password"
          size="small"
          sx={{
            width: "100%",
            bgcolor: "#313c4b",
            margin: "20px 0",
          }}
        />

        <Button
          sx={{
            width: "100%",
            margin: "20px 0",
            padding: "10px",
            bgcolor: "#0044f1",
          }}
        >
          ログイン
        </Button>
      </Box>

      <Text>
        アカウントをお持ちでない方は
        <Link
          href={"/"}
          style={{
            textDecoration: "none",
            color: "#9932cc",
          }}
        >
          新規登録
        </Link>
      </Text>
    </Box>
  );
};
