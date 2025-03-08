"use client";

import { useSession } from "next-auth/react";

export const useHeaderSession = () => {
  const { data: session, status } = useSession();
  return { session, status };
};
