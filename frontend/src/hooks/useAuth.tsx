import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode, JwtPayload} from "jwt-decode";


import { AuthContext } from "../components/AuthContext"; // Adjust the import path as necessary

const useAuth = () => {
  const { token, setToken ,loading} = useContext(AuthContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading &&token && !isTokenValid(token)) {
      logout();
    }
  }, [loading,token]);

  const isTokenValid = (token: string): boolean => {
    try {
        console.log(token)
      const decoded = jwtDecode<JwtPayload>(token);
      console.log(decoded)
      const currentTime = Date.now() / 1000;
      console.log(currentTime<decoded.exp!)
      return decoded.exp! > currentTime;
    } catch (error) {
        console.log(error)
        console.log("token valid issue")
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
    loading
  };
};

export default useAuth;
