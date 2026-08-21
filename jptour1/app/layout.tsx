import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JPTour | Small-group days in Japan",
  description: "Thoughtfully paced day tours in Kyoto, Nara and Osaka.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

