import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mx-24 flex flex-col gap-10 justify-between items-center bg-white text-gray-500 py-6 pt-10 text-sm">
      <div className=" mx-auto flex  justify-between items-center w-full ">
        <div className="flex flex-col gap-1 justify-center items-start">
          <Link to="/dashboard">
            <div className="text-4xl text-[#f96a46] font-bold">PATHSHALA</div>
          </Link>
          <div className="text-xl text-gray-500">
            Demonstration of Permit.io
          </div>
          <div className="mt-3 flex text-xl gap-2 text-gray-500 ">
            <FaFacebook className="hover:text-[#f96a4699]" />
            <FaInstagram className="hover:text-[#f96a4699]" />
            <FaTiktok className="hover:text-[#f96a4699]" />
            <FaXTwitter className="hover:text-[#f96a4699]" />
            <FaLinkedin className="hover:text-[#f96a4699]" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-black">About</h1>
          <div className="hover:text-[#f96a4699]">About Us</div>
          <div className="hover:text-[#f96a4699]">Features</div>
          <div className="hover:text-[#f96a4699]">News</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-black">Account</h1>
          <div className="hover:text-[#f96a4699]">Support Center</div>
          <div className="hover:text-[#f96a4699]">Feedback</div>
          <div className="hover:text-[#f96a4699]">Contact Us</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-black">Company</h1>
          <div className="hover:text-[#f96a4699]">Our Team</div>
          <div className="hover:text-[#f96a4699]">Partner</div>
          <div className="hover:text-[#f96a4699]">FAQ</div>
        </div>
      </div>
      <div className="text-gray-500 text-lg">
        &#169; Pathshala 2024. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
