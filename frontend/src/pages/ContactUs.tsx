import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Layout from "../layouts/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <Layout>
      <NavBar />
      <div
        id="contact-us"
        className="flex justify-evenly items-center bg-stone-100 mx-auto my-16 p-4 py-20 w-11/12 rounded-3xl"
      >
        <div className="w-2/5 flex flex-col justify-start items-start gap-5">
          <div className="text-5xl font-medium">
            Send us a{" "}
            <span className="text-[#f96a46] underline">message...</span>
          </div>
          <div className="text-base text-gray-600">
            Have questions, feedback, or just want to say hello? We'd love to
            hear from you! Fill out the form below, and we'll get back to you
            promptly.
          </div>
          <div className="ml-3 mt-5 flex text-sm text-stale-400  flex-col gap-2">
            <p className="flex gap-4">
              <FaPhoneAlt />
              +977-9812345678
            </p>
            <p className="flex gap-4">
              <FaLocationDot />
              pathshala@pathshala.com
            </p>
            <p className="flex gap-4">
              <MdEmail /> Kathmandu, Nepal
            </p>
          </div>
        </div>
        <div className="mx-10 px-8 py-10 w-4/12 shadow-2xl rounded-2xl bg-white ">
          <div className="bg-white ">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border-2  rounded-md focus:border-[#f96a4699] focus:border-2 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 p-2 w-full border-2  rounded-md focus:border-[#f96a4699] focus:border-2 focus:outline-none"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeToPrivacyPolicy"
                    name="agreeToPrivacyPolicy"
                    className="mr-2 accent-[#f96a4622]"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the Privacy Policy
                  </span>
                </label>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    className="mr-2 accent-[#f96a4622]"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the Terms and Conditions
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full text-lg font-bold bg-[#f96a46] text-white py-2 rounded-md hover:bg-[#f96a4699] focus:outline-none focus:ring focus:border-[#f96a4699]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default ContactUs;
