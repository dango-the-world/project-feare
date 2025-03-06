"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useModalClose = (onClose: () => void) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
    };

    return () => {
      handleRouteChange();
    };
  }, [router, onClose]);
};
