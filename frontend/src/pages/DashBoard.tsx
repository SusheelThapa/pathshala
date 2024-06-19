// components/Dashboard.tsx
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { ChannelPost } from "../types/types";
import { stringToDate } from "../utils/stringToDate";
import SideBar from "../components/SideBar";

import { TbBeta, TbDelta } from "react-icons/tb";
import {
  SiYoutubegaming,
  SiDailydotdev,
  SiOpensourcehardware,
} from "react-icons/si";
import { FaHome, FaBaby } from "react-icons/fa";

const sideBarChannelList = [
  {
    icon: <SiDailydotdev />,
    title: "Daily Notice",
  },
  {
    icon: <TbDelta />,
    title: "Delta Group",
  },
  {
    icon: <TbBeta />,
    title: "Beta Group",
  },
  {
    icon: <SiYoutubegaming />,
    title: "Gaming",
  },
  {
    icon: <SiOpensourcehardware />,
    title: "Kontribution",
  },
  {
    icon: <FaHome />,
    title: "Hostel",
  },
  {
    icon: <FaBaby />,
    title: "General",
  },
];
const Dashboard: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const [selectedChannel, setSelectedChannel] =
    useState<string>("Daily Notice");
  const [channelPost, setChannelPost] = useState<ChannelPost>({
    postedBy: "JohnDoe",
    postedTo: "Daily Notice",
    message:
      "Hello everyone, this is a sample post to the Daily Notice channel.",
    postedOn: stringToDate("2024-06-19T12:00:00Z"),
  });

  useEffect(() => {
    // Retrieve the message from backend
    // if response is success and check for loading and isAuthenticated
    setChannelPost({
      postedBy: "JaneSmith",
      postedTo: "Alpha Group",
      message:
        "Welcome to the Alpha Group! Let's get started with our project.",
      postedOn: stringToDate("2024-06-19T12:00:00Z"),
    });
  }, [selectedChannel]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Redirecting...</div>;
  }

  const handleChannelSelection = (newSelectedChannel: string) => {
    setSelectedChannel(newSelectedChannel);
  };
  return (
    <div>
      <SideBar
        selectedChannel={selectedChannel}
        onClickChannelListOption={handleChannelSelection}
        sidebarList={sideBarChannelList}
      />
    </div>
  );
};

export default Dashboard;
