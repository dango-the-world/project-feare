import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Header } from "./_components/_organisms/Header";
// import lightTheme from "./_theme/lightTheme";
import darkTheme from "./_theme/darkTheme";

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
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <AppRouterCacheProvider>
            <Header />
            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
