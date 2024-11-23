import { ReactNode, useState } from "react";

import { AuthContext } from "./AuthContext";

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [role, setRole] = useState<"Admin" | "User" | "" | null>(null);

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}
