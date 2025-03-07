"use client";

import { UIProvider } from "@yamada-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
import { Header } from "./header/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();

  if (["/auth/signup"].includes(pathname)) {
    return <UIProvider>{children}</UIProvider>;
  }
  return (
    <UIProvider>
      <Header />
      {children}
    </UIProvider>
  );
};
