import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto flex h-full items-center justify-center p-4">
        <form className="flex w-full max-w-[512px] flex-col gap-8 rounded border border-gray-300 bg-white p-16 text-gray-900">
          <h1 className="text-center text-2xl font-bold">Sign in</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="rounded border-2 border-gray-300 p-2 outline-sky-500"
            />
            <div className="flex items-center gap-2">
              <ExclamationCircleIcon className="h-4 w-4 text-red-500" />
              <p className="text-red-500">Please fill out this field</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded border-2 border-gray-300 p-2 outline-sky-500"
            />
            <EyeIcon className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-gray-500" />
            <EyeSlashIcon className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-gray-500" />
            <div className="flex items-center gap-2">
              <ExclamationCircleIcon className="h-4 w-4 text-red-500" />
              <p className="text-red-500">Please fill out this field</p>
            </div>
          </div>
          <button className="rounded border-2 border-sky-500 bg-sky-500 px-4 py-2 text-white hover:bg-white hover:text-sky-500">
            Login
          </button>
          <p className="rounded border-2 border-red-500 bg-red-100 px-4 py-2 text-center text-red-500">
            Incorrect username or password
          </p>
        </form>
      </div>
    </section>
  );
}
