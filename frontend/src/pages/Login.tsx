import { useRef, useState, FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import {
  IoPersonAddOutline,
  IoLockClosedOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";

import logo from "../assets/images/logo/logo.webp";

const Login: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { setToken } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    // Ensure username and password are not null
    if (username && password) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
          {
            username,
            password,
          }
        );
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Username or password is missing");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-f8f9fa">
      <div className="w-full max-w-lg p-12 space-y-8 bg-stone-100 rounded-3xl shadow-2xl shadow-gray-300">
        <div>
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-44 h-44" />
          </div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Welcome back
          </h2>
          <p className="text-center text-sm text-gray-600 mt-1">
            Sign in to access your pathshala
          </p>
        </div>
        <form className="mt-12 space-y-6" onSubmit={handleLogin}>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="relative flex items-center">
              <IoPersonAddOutline className="absolute ml-3 text-lg text-gray-600" />
              <input
                id="username"
                name="username"
                type="username"
                required
                className="w-full pl-10 pr-3 py-3 text-sm border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f96a46]"
                placeholder="Enter your username"
                ref={usernameRef}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 flex justify-between"
            >
              Password
              <Link
                to="/forgot-password"
                className="text-sm text-[#f96a46] hover:text-[#df5938]"
              >
                Forgot Password?
              </Link>
            </label>
            <div className="relative flex items-center">
              <IoLockClosedOutline className="absolute ml-3 text-lg text-gray-600" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="w-full pl-10 pr-3 py-3 text-sm border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f96a46]"
                placeholder="Enter your password"
                ref={passwordRef}
              />
              {showPassword ? (
                <IoEyeOffOutline
                  className="absolute right-3 text-lg text-gray-600 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <IoEyeOutline
                  className="absolute right-3 text-lg text-gray-600 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-md tracking-wider font-bold text-white rounded-md shadow-sm bg-[#f96a46] hover:bg-[#df5938]"
          >
            Sign in
          </button>
        </form>
        <div className="text-sm text-center">
          <span className="text-gray-600 mr-2">No account?</span>
          <Link to="/signup" className="font-medium">
            <span className="text-[#f96a46] hover:text-[#df5938]">
              Create an account
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
