import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the type for the context state
interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  loading: boolean;
}

// Create the context with a default undefined state
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Define the type for the provider props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
