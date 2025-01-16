import { Box, Button, TextField, Typography } from "@mui/material";
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
      bgcolor={"#1F2937"}
      border={"3px solid #680c62"}
      borderRadius={"10px"}
    >
      <Typography variant="h5">ログイン</Typography>

      <Box width={"80%"}>
        <TextField
          label="メールアドレス"
          size="small"
          sx={{
            width: "100%",
            bgcolor: "#313c4b",
            margin: "20px 0",
          }}
        />

        <TextField
          label="パスワード"
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

      <Typography>
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
      </Typography>
    </Box>
  );
};
