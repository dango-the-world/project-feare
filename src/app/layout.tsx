import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

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
        {/* <ThemeProvider theme={lightTheme}> */}
        <CssBaseline />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
