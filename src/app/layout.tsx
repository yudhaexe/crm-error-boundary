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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <Navbar />
          <Container>{children}</Container>
      </body>
    </html>
  );
}
