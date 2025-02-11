import { UIProvider } from "@yamada-ui/react";
// import darkTheme from "./_theme/darkTheme";
import { Header } from "./_components/Header";
import type { Metadata } from "next";
// import { theme } from "./_theme";

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
