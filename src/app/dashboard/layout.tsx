"use client";

// node_modules
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// src
import Aside from "@/components/Aside";

// ################################################################
// # Props Type
// ################################################################

type DashboardLayoutProps = {
  children: ReactNode;
};

// ################################################################
// # Component
// ################################################################

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // React Query
  const queryClient = new QueryClient();

  // Variables
  let id: string | null = null;

  /**
   * All Next.js components(client or server) are first rendered
   * in the server and localStorage is not available in server side.
   */
  if (!(typeof window === "undefined")) {
    id = localStorage.getItem("id");
  }

  // Protect dashboard route
  if (!id) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <main className="container mx-auto grid grid-cols-[auto_1fr] gap-x-4 p-4">
        <Aside />
        {children}
      </main>
    </QueryClientProvider>
  );
}
