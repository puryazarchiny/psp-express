"use client";

// node_modules
import { Inter } from "next/font/google";
import { ReactNode } from "react";

// src
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthProvider from "@/contexts/AuthProvider";

// ################################################################
// # Fonts
// ################################################################

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// ################################################################
// # Props Type
// ################################################################

type RootLayoutProps = {
  children: ReactNode;
};

// ################################################################
// # Component
// ################################################################

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <AuthProvider>
        <body className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-100">
          <Header />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
