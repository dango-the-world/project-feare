"use client";

import { useSignup } from "@/app/_hooks/useSignup";
import { Box, Button, Input, Text } from "@yamada-ui/react";
import React, { useState } from "react";

export const SignupCard = () => {
  const { signup, loading, error } = useSignup();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await signup(email, password, username);
  };

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
      <Text variant="h5">新規登録</Text>

      <Box width={"80%"}>
        <Input
          placeholder="ユーザーネーム"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="small"
          sx={{ width: "100%", bgcolor: "#313c4b", margin: "20px 0" }}
        />

        <Input
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          sx={{ width: "100%", bgcolor: "#313c4b", margin: "20px 0" }}
        />

        <Input
          placeholder="パスワード"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="small"
          sx={{ width: "100%", bgcolor: "#313c4b", margin: "20px 0" }}
        />

        {error && <Text color="red">{error}</Text>}

        <Button
          onClick={handleSignup}
          disabled={loading}
          sx={{
            width: "100%",
            margin: "20px 0",
            padding: "10px",
            bgcolor: "#0044f1",
          }}
        >
          {loading ? "登録中..." : "登録"}
        </Button>
      </Box>
    </Box>
  );
};
