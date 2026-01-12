import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dock from "@/components/Dock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ameya's Portfolio",
  description: "Ameya's Portfolio",
  icons: "/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Dock />
      </body>
    </html>
  );
}
