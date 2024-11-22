import {
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  ListBulletIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="grid h-[799px] w-64 grid-rows-[auto_auto_1fr] gap-4 rounded border border-gray-300 p-4">
      <button
        type="button"
        className="flex w-full items-center gap-3 justify-self-start rounded bg-gray-300 p-[10px]"
      >
        <ListBulletIcon className="h-5 w-5 text-gray-700" />
        <Link href="/dashboard" className="text-gray-900">
          List
        </Link>
      </button>
      <button
        type="button"
        className="flex w-full items-center gap-3 justify-self-start rounded bg-gray-300 p-[10px]"
      >
        <Cog6ToothIcon className="h-5 w-5 text-gray-700" />
        <Link href="/dashboard/settings" className="text-gray-900">
          Settings
        </Link>
      </button>
      <button
        type="button"
        className="flex w-full items-center gap-3 self-end justify-self-start rounded border-2 border-sky-500 bg-sky-500 p-2 text-white hover:bg-gray-100 hover:text-sky-500"
      >
        <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
        <p>Logout</p>
      </button>
    </aside>
  );
}
