import { HomeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto border-b border-gray-300 p-4">
        <Link href="/" className="flex items-center gap-2">
          <HomeIcon className="h-6 w-6 text-gray-500" />
          <p className="text-2xl font-bold text-gray-900">Home</p>
        </Link>
      </div>
    </header>
  );
}
