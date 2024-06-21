import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import NavBar from "../components/NavBar";

import logo from "../assets/images/logo/logo.webp";
import Layout from "../layouts/Layout";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Layout>
      <NavBar />
      <div className="mx-auto my-16 p-4 py-8 w-11/12   bg-stone-100 rounded-3xl justify-center  items-center">
        <div className="flex flex-col md:flex-row items-center justify-center  text-black p-8 h-[60vh] w-full">
          <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Pathshala</h1>
            <h3 className="text-2xl mb-4">
              A demonstration of Permit.io’s policy-driven access control in a
              simulated educational platform
            </h3>
            <p className="text-lg mb-4 w-3/4">
              Users experience role-based permissions within various learning
              channels, illustrating the versatility and security of Permit.io
              in managing access rights.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <FaTwitter className="text-3xl  text-[#f96a46aa] hover:text-[#f96a46] cursor-pointer" />
              <FaFacebook className="text-3xl  text-[#f96a46aa] hover:text-[#f96a46] cursor-pointer" />
              <FaLinkedin className="text-3xl  text-[#f96a46aa] hover:text-[#f96a46] cursor-pointer" />
              <FaGithub className="text-3xl  text-[#f96a46aa] hover:text-[#f96a46] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;
