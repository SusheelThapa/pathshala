import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode";

import { AuthContext } from "../components/AuthContext"; // Adjust the import path as necessary

const useAuth = () => {
  const { token, setToken, loading } = useContext(AuthContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (token && isTokenValid(token)) {
        navigate("/dashboard");
      } else if (token && !isTokenValid(token)) {
        logout();
      }
    }
  }, [loading, token]);

  const isTokenValid = (token: string): boolean => {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now() / 1000;
      console.log(decoded.exp! > currentTime)
      return decoded.exp! > currentTime;
    } catch (error) {
      return false;
    }
  };

  const logout = (): void => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return {
    isAuthenticated: token !== null && isTokenValid(token),
    logout,
    setToken,
    loading,
  };
};

export default useAuth;
