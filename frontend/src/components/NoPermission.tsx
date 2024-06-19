import { FaLock } from "react-icons/fa";

const NoPermission = () => {
  return (
    <div
      aria-disabled
      className="py-4 text-lg flex justify-center items-center gap-4 m-6 w-4/5 bg-[#f96a46] rounded-xl cursor-not-allowed border-2 border-[#f96a46] hover:bg-[#f96a46ee] hover:text-white transition duration-300 ease-in-out"
    >
      <FaLock className="text-white" />
      <div className="flex justify-center items-center font-extrabold text-white">
        No Permission
      </div>
    </div>
  );
};

export default NoPermission;
