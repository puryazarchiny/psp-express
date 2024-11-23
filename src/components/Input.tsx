// node_modules
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

// src
import FormErrors from "./FormErrors";

// ################################################################
// # Props Type
// ################################################################

type InputProps = {
  type: "text" | "password";
  label: string;
  name: string;
  username?: string;
  setUsername?: (username: string) => void;
  password?: string;
  setPassword?: (password: string) => void;
  error?: "username" | "password" | "both" | "fetch" | null;
};

// ################################################################
// # Component
// ################################################################

export default function Input({
  type,
  label,
  name,
  username,
  setUsername,
  password,
  setPassword,
  error,
}: InputProps) {
  // States
  const [showPassword, setShowPassword] = useState(false);

  // ################################################################
  // # Input Type Text
  // ################################################################

  if (type === "text") {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor="username">{label}</label>
        <input
          type="text"
          name={name}
          id={name}
          value={username}
          className="rounded border-2 border-gray-300 p-2 outline-sky-500"
          onChange={(e) =>
            setUsername && setUsername(e.target.value.toLowerCase())
          }
        />
        {(error === "username" || error === "both") && (
          <FormErrors type="username" />
        )}
      </div>
    );
  }

  // ################################################################
  // # Input Type Password
  // ################################################################

  if (type === "password") {
    return (
      <div className="relative flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          value={password}
          className="rounded border-2 border-gray-300 p-2 outline-sky-500"
          onChange={(e) => setPassword && setPassword(e.target.value)}
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
          <FormErrors type="password" />
        )}
      </div>
    );
  }
}
