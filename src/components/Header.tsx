// node_modules
import { HomeIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

// src
import { useAuth } from "@/contexts";

// ################################################################
// # Component
// ################################################################

export default function Header() {
  // Contexts
  const { role } = useAuth();

  // Variables
  let id: string | null = null;

  /**
   * All Next.js components(client or server) are first rendered
   * in the server and localStorage is not available in server side.
   */
  if (!(typeof window === "undefined")) {
    id = localStorage.getItem("id");
  }

  return (
    <header>
      <div className="container mx-auto flex justify-between border-b border-gray-300 p-4">
        <Link href="/" className="flex items-center gap-2">
          <HomeIcon className="h-6 w-6 text-gray-500" />
          <p className="text-2xl font-bold text-gray-900">Home</p>
        </Link>
        {(role || id) && (
          <div className="flex items-center gap-2">
            <p className="font-bold text-gray-900">{`${id === "1" ? "(Admin)" : "(User)"} ${id === "1" ? "Bret" : "Antonette"}`}</p>
            <UserCircleIcon className="h-8 w-8 text-gray-500" />
          </div>
        )}
      </div>
    </header>
  );
}
