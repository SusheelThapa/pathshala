import React from "react";

interface Props {
  sidebarList: { icon: React.ReactNode; title: string }[];
  selectedChannel: string;
  onClickChannelListOption: (title: string) => void;
}

const SideBar = ({
  sidebarList,
  selectedChannel,
  onClickChannelListOption,
}: Props) => {
  return (
    <div className="pt-4 pb-16 h-full w-full">
      <ul className="h-full space-y-4 text-lg w-full ml-6">
        {sidebarList.map(({ icon, title }) => (
          <li
            key={title}
            onClick={() => onClickChannelListOption(title)}
            className={`w-full py-3 pl-2 rounded-lg flex justify-start items-center space-x-2 cursor-pointer ${
              selectedChannel === title
                ? "bg-[#f96a46] text-white"
                : "hover:bg-[#f96a46] hover:bg-opacity-50 text-gray-600"
            }`}
          >
            <div
              className={`mr-3 p-1 rounded-lg w-9 h-9 flex justify-center items-center text-xl font-black ${
                selectedChannel === title
                  ? "text-white bg-[#f96a46]"
                  : "bg-white text-gray-600 hover"
              }`}
            >
              {icon}
            </div>
            <div className="flex justify-center items-center">{title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
