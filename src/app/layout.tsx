import { UIProvider } from "@yamada-ui/react";
import { Header } from "./_components/header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FEARE",
  description: "あなたの「怖い」を共有",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        style={{
          backgroundColor: "#111827",
          color: "#fff",
        }}
      >
        <UIProvider>
          <Header />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
