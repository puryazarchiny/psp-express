import type { Metadata } from "next";
import { ReactNode } from "react";

import Aside from "@/components/Aside";

export const metadata: Metadata = {
  title: "Dashboard",
};

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="container mx-auto grid grid-cols-[auto_1fr] gap-x-4 p-4">
      <Aside />
      {children}
    </main>
  );
}
