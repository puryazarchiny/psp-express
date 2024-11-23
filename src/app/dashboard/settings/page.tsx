"use client";

import { useRouter } from "next/navigation";

export default function Settings() {
  // Navigation
  const router = useRouter();

  // Variables
  let id: string | null = null;

  /**
   * All Next.js components(client or server) are first rendered
   * in the server and localStorage is not available in server side.
   */
  if (!(typeof window === "undefined")) {
    id = localStorage.getItem("id");
  }

  // Protect settings route
  if (!id) {
    router.push("/");
  }

  return (
    <section className="flex items-center justify-center rounded border border-gray-300 p-4 text-2xl font-bold">
      Settings
    </section>
  );
}
