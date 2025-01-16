import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const PostForm = () => {
  return (
    <Box
      bgcolor={"#1F2937"}
      border={"3px solid #680c62"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"30px"}
      py={"40px"}
      my={"60px"}
      borderRadius={"10px"}
    >
      <Typography>怖い話を投稿</Typography>

      <Box
        sx={{
          width: "80%",
        }}
      >
        <TextField
          label="タイトル"
          sx={{
            width: "100%",
            bgcolor: "#313c4b",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "80%",
        }}
      >
        <TextField
          label="本文"
          multiline
          minRows={15}
          sx={{
            width: "100%",
            bgcolor: "#313c4b",
          }}
        />
      </Box>

      <Box width={"80%"}>
        <input
          accept="image/*"
          id="image-upload"
          type="file"
          style={{ display: "none" }} // inputを隠す
        />
        <label htmlFor="image-upload">
          <Button
            variant="contained"
            component="span"
            sx={{
              textAlign: "left",
              width: "100%",
              padding: "10px",
              color: "#ffffff",
              bgcolor: "#313c4b",
            }}
          >
            イメージを投稿
          </Button>
        </label>
      </Box>

      <Box
        sx={{
          width: "80%",
        }}
      >
        <FormControl
          sx={{
            width: "100%",
            bgcolor: "#313c4b",
          }}
        >
          <InputLabel id="demo-simple-select-label">タグ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="タグ"
          >
            <MenuItem value={10}>創作</MenuItem>
            <MenuItem value={20}>日常</MenuItem>
            <MenuItem value={30}>悪夢</MenuItem>
            <MenuItem value={40}>悪夢</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
          sx={{
            width: "80%",
            padding: "10px",
            color: "#FFFFFF",
            bgcolor: "#680c62",
          }}
        >
          投稿
        </Button>
      </Box>
    </Box>
  );
};
