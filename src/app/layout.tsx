import type { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
