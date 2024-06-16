import { useRef, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoPersonOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";

import logo from "../../public/logo/logo.webp";

const SignUp: React.FC = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;

    if (firstName && lastName && email && password) {
      try {
        console.log(username);
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
          username,
          firstName,
          lastName,
          email,
          password,
        });

        if (response.status == 200) {
          navigate("/login");
        }

      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Please fill in all fields");
    }
  };

  const handleNameChange = () => {
    const firstName = firstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    setUsername(`${firstName}${lastName}`.toLowerCase().replace(/\s+/g, ""));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-f8f9fa">
      <div className="w-full max-w-lg p-12 space-y-4 bg-stone-100 rounded-3xl shadow-2xl shadow-gray-300">
        <div>
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-32 h-32" />
          </div>
          <h2 className="text-2xl font-extrabold text-center text-gray-900">
            Create Your Account
          </h2>
        </div>
        <form className="mt-12 space-y-4" onSubmit={handleSignup}>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full pl-3 pr-3 py-3 text-sm border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f96a46]"
              placeholder="Your first name"
              ref={firstNameRef}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full pl-3 pr-3 py-3 text-sm border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f96a46]"
              placeholder="Your last name"
              ref={lastNameRef}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="relative flex items-center">
              <IoPersonOutline className="absolute ml-3 text-lg text-gray-600" />
              <input
                id="username"
                name="username"
                type="text"
                disabled
                value={username}
                className="w-full pl-10 pr-3 py-3 text-sm bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none"
                placeholder="Your username will appear here"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative flex items-center">
              <IoMailOutline className="absolute ml-3 text-lg text-gray-600" />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full pl-10 pr-3 py-3 text-sm border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f96a46]"
                placeholder="Your email"
                ref={emailRef}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
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
            Sign up
          </button>
        </form>
        <div className="text-sm text-center">
          <span className="text-gray-600 mr-2">Already have an account?</span>
          <Link
            to="/login"
            className="font-medium text-[#f96a46] hover:text-[#df5938]"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
