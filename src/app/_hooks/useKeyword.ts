"use client";

import { useState } from "react";

export const useKeyword = () => {
  const [keyword, setKeyword] = useState("");

  return { keyword, setKeyword };
};
