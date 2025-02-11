import { UIProvider } from "@yamada-ui/react";
import type { Metadata } from "next";
import { Header } from "./_components/Header";

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
      <body>
        <UIProvider>
          <Header />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
