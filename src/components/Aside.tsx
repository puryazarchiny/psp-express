// node_modules
import {
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  ListBulletIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

// src
import { useAuth } from "@/contexts";

// ################################################################
// # Component
// ################################################################

export default function Aside() {
  // States
  const [activeButton, setActiveButton] = useState<"list" | "settings">("list");

  // Contexts
  const { role, setRole } = useAuth();

  // Variables
  let id: string | null = null;

  /**
   * All Next.js components(client or server) are first rendered
   * in the server and localStorage is not available in server side.
   */
  if (!(typeof window === "undefined")) {
    id = localStorage.getItem("id");
  }

  // ################################################################
  // # Functions
  // ################################################################

  const handleOnClick = (button: "list" | "settings") => {
    setActiveButton(button);
  };

  // ################################################################
  // # JSX
  // ################################################################

  return (
    <aside
      className={`grid h-[799px] w-64 gap-4 rounded border border-gray-300 p-4 ${id === "1" ? "grid-rows-[auto_auto_1fr]" : "grid-rows-[auto_1fr]"}`}
    >
      <Link
        href="/dashboard"
        className={`flex w-full items-center gap-3 justify-self-start rounded p-[10px] ${activeButton === "list" ? "bg-gray-300" : "hover:bg-gray-200"}`}
        onClick={() => handleOnClick("list")}
      >
        <ListBulletIcon className="h-5 w-5 text-gray-700" />
        <span className="text-gray-900">List</span>
      </Link>

      {(role === "Admin" || id === "1") && (
        <Link
          href="/dashboard/settings"
          className={`flex w-full items-center gap-3 justify-self-start rounded p-[10px] ${activeButton === "settings" ? "bg-gray-300" : "hover:bg-gray-200"}`}
          onClick={() => handleOnClick("settings")}
        >
          <Cog6ToothIcon className="h-5 w-5 text-gray-700" />
          <span className="text-gray-900">Settings</span>
        </Link>
      )}

      <Link
        href="/"
        className="flex w-full items-center gap-3 self-end justify-self-start rounded border-2 border-sky-500 bg-sky-500 p-2 text-white hover:bg-gray-100 hover:text-sky-500"
        onClick={() => {
          localStorage.removeItem("id");
          setRole("");
        }}
      >
        <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
        <p>Logout</p>
      </Link>
    </aside>
  );
}
