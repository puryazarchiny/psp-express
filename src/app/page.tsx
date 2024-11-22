"use client";

import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { User } from "@/types";

const passwords = {
  1: "admin",
  2: "user",
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<
    "username" | "password" | "both" | "fetch" | ""
  >("");

  const router = useRouter();

  const isError = () => {
    let error = false;

    if (username.length === 0) {
      setError("username");
      error = true;
    }

    if (password.length === 0) {
      setError("password");
      error = true;
    }

    if (password.length === 0 && username.length === 0) {
      setError("both");
    }

    return error;
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isError()) {
      return;
    }

    try {
      setError("");
      setIsLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      const data: User[] = await response.json();

      const [user] = data.filter(
        (user) => user.username.toLowerCase() === username,
      );

      if (user && password === passwords[user.id as keyof typeof passwords]) {
        router.push("/dashboard");
      } else {
        throw new Error("fetch");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message as "fetch");
      }

      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container mx-auto flex h-full items-center justify-center p-4">
      <form
        className="flex w-full max-w-[512px] flex-col gap-8 rounded border border-gray-300 bg-white p-16 text-gray-900"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <h1 className="text-center text-2xl font-bold">Sign in</h1>

        {/* Username */}
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            className="rounded border-2 border-gray-300 p-2 outline-sky-500"
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
          />
          {(error === "username" || error === "both") && (
            <div className="flex items-center gap-2">
              <ExclamationCircleIcon className="h-4 w-4 text-red-500" />
              <p className="text-red-500">Please fill out this field</p>
            </div>
          )}
        </div>

        {/* Password */}
        <div className="relative flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            className="rounded border-2 border-gray-300 p-2 outline-sky-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!showPassword && (
            <EyeIcon
              className="absolute right-2 top-[42px] h-6 w-6 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(true)}
            />
          )}
          {showPassword && (
            <EyeSlashIcon
              className="absolute right-2 top-[42px] h-6 w-6 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(false)}
            />
          )}
          {(error === "password" || error === "both") && (
            <div className="flex items-center gap-2">
              <ExclamationCircleIcon className="h-4 w-4 text-red-500" />
              <p className="text-red-500">Please fill out this field</p>
            </div>
          )}
        </div>

        <button
          disabled={isLoading}
          className="flex items-center justify-center rounded border-2 border-sky-500 bg-sky-500 px-4 py-2 text-white hover:bg-white hover:text-sky-500 disabled:bg-sky-500"
        >
          {isLoading ? (
            <span className="h-6 w-6 animate-spin rounded-full border-4 border-transparent border-t-white"></span>
          ) : (
            <span>Login</span>
          )}
        </button>

        {error === "fetch" && (
          <p className="rounded border-2 border-red-500 bg-red-100 px-4 py-2 text-center text-red-500">
            Incorrect username or password
          </p>
        )}
      </form>
    </section>
  );
}
