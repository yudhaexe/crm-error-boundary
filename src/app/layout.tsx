import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, AppBar, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "Acme Corp",
  description: "Acme Corp Clients Page",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Navbar />
          <Container>{children}</Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
