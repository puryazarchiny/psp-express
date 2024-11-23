"use client";

// node_modules
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

// src
import FormErrors from "@/components/FormErrors";
import Input from "@/components/Input";
import { useAuth } from "@/contexts";
import { User } from "@/types";

// ################################################################
// # Component
// ################################################################

export default function Login() {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<
    "username" | "password" | "both" | "fetch" | null
  >(null); // Type of errors

  // Contexts
  const { setRole } = useAuth();

  // Navigation
  const router = useRouter();

  // Constants
  const passwords = {
    1: "admin", // user with id 1 is admin
    2: "user", // user with id 2 is normal user
  };

  // ################################################################
  // # Functions
  // ################################################################

  // Set type of error
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

  // Submit form
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isError()) {
      return;
    }

    try {
      setError(null);
      setIsLoading(true);

      // Fetch users
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      const data: User[] = await response.json();

      // Check if user exists
      const [user] = data.filter(
        (user) => user.username.toLowerCase() === username,
      );

      // Authenticate user
      if (user && password === passwords[user.id as keyof typeof passwords]) {
        /**
         * All Next.js components(client or server) are first rendered
         * in the server and localStorage is not available in server side.
         */
        if (!(typeof window === "undefined")) {
          localStorage.setItem("id", user.id.toString());
        }

        setRole(user.id === 1 ? "Admin" : "User"); // id 1 is admin and id 2 is user

        router.push("/dashboard");
      } else {
        throw new Error("fetch");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message as "fetch");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // ################################################################
  // # JSX
  // ################################################################

  return (
    <section className="container mx-auto flex h-full items-center justify-center p-4">
      <form
        className="flex w-full max-w-[512px] flex-col gap-8 rounded border border-gray-300 bg-white p-16 text-gray-900"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <h1 className="text-center text-2xl font-bold">Sign in</h1>

        <Input
          type="text"
          label="Username"
          name="username"
          username={username}
          setUsername={setUsername}
          error={error}
        />

        <Input
          type="password"
          label="Password"
          name="password"
          password={password}
          setPassword={setPassword}
          error={error}
        />

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

        {error === "fetch" && <FormErrors type="fetch" />}
      </form>
    </section>
  );
}
