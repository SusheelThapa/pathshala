import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo/logo.webp";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage and redirect to login page or home page
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center h-16 text-xl text-black my-10">
      {/* Logo section */}
      <Link to="/dashboard">
        <div className="flex gap-2 items-end justify-end">
          <img
            src={logo}
            alt="Logo of Pathshala"
            className="w-32 rounded-full"
          />
        </div>
      </Link>

      <div>
        <ul className="flex gap-10 justify-start items-center font-medium">
          <li className="hover:text-[#f96a46] cursor-pointer text-lg">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-[#f96a46] cursor-pointer text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#f96a46] cursor-pointer text-lg">
            <Link to="/contact-us">Contact us</Link>
          </li>
          <li className="hover:text-[#f96a46] cursor-pointer text-lg">
            <Link to="/assign-roles">Assign Roles</Link>
          </li>
        </ul>
      </div>

      <div className="relative">
        <div
          className="p-3 px-5 rounded-xl text-black font-semibold tracking-widest cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="text-base bg-[#f96a46] text-white py-3 px-7 rounded-xl">
            {localStorage.getItem("username")!.toUpperCase()}
          </div>
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-sm ">
            <ul>
              <li className="hover:bg-[#f96a4666] cursor-pointer px-4 py-2">
                <Link to="/profile">Profile</Link>
              </li>
              <li
                className="hover:bg-[#f96a4666] cursor-pointer px-4 py-2"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
