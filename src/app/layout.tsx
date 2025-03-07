import { Header } from "./_components/header/Header";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { MainLayout } from "./_components/MainLayout";

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
        <SessionProvider>
          <MainLayout>{children}</MainLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
