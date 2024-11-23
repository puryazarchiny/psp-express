import { useContext } from "react";

import { AuthContext } from "./AuthContext";

export function useAuth() {
  const useAuth = useContext(AuthContext);

  if (!useAuth)
    throw new Error("useAuth has to be used within <AuthContext.Provider>");

  return useAuth;
}
