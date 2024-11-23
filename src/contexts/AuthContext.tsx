import { createContext } from "react";

type AuthContextType = {
  role: "Admin" | "User" | "" | null;
  setRole: (isAdmin: "Admin" | "User" | "" | null) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
