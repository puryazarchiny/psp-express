"use client";

import { useQuery } from "react-query";

import { Post } from "@/types";

export default function Dashboard() {
  const { data, isLoading } = useQuery("posts", async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data: Post[] = await res.json();

    return data;
  });

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
