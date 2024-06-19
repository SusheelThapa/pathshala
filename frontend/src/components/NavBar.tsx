import { Link } from "react-router-dom";

import logo from "../assets/images/logo/logo.webp";

const NavBar = () => {
  return (
    <div className=" flex justify-between items-center h-16 text-xl text-black my-10">
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
        <ul className="flex gap-10  justify-start items-center font-medium">
          <li className="hover:text-[#f96a46] cursor-pointer">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-[#f96a46] cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#f96a46] cursor-pointer">
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>

      <div className=" bg-[#f96a46] shadow-md shadow-[#fdbaa9] p-3 px-5 rounded-xl text-white font-semibold tracking-widest">
        <div className="text-base">
          {localStorage.getItem("username")!.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
