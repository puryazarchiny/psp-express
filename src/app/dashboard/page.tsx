"use client";

// node_modules
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";

// src
import { Post } from "@/types";

// ################################################################
// # Component
// ################################################################

export default function Dashboard() {
  // Navigation
  const router = useRouter();

  // React Query
  const { data } = useQuery("posts", async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data: Post[] = await res.json();

    return data;
  });

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
    router.push("/");
  }

  return (
    <section className="h-[799px] overflow-y-auto rounded border border-gray-300 p-4">
      <ul className="grid grid-cols-2 gap-4">
        {data?.map((post) => (
          <li
            key={post.id}
            className="flex h-64 flex-col gap-4 bg-gray-200 p-4 shadow"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
