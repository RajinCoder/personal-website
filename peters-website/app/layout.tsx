import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>{"PM | Portfolio Website"}</title>
      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
