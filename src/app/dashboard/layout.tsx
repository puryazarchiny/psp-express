"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Aside from "@/components/Aside";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="container mx-auto grid grid-cols-[auto_1fr] gap-x-4 p-4">
        <Aside />
        {children}
      </main>
    </QueryClientProvider>
  );
}
