// components/Dashboard.tsx
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { ChannelPost } from "../types/types";
import { stringToDate } from "../utils/stringToDate";
import SideBar from "../components/SideBar";
import ChannelPosts from "../components/ChannelPosts";
import { TbBeta, TbDelta } from "react-icons/tb";
import {
  SiYoutubegaming,
  SiDailydotdev,
  SiOpensourcehardware,
} from "react-icons/si";
import { FaHome, FaBaby } from "react-icons/fa";
import NavBar from "../components/NavBar";
import Layout from "../layouts/Layout";

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
  const [channelPost, setChannelPost] = useState<ChannelPost[]>([
    {
      postedBy: "JohnDoe",
      postedTo: "Daily Notice",
      message:
        "Hello everyone, this is a sample post to the Daily Notice channel.",
      postedOn: stringToDate("2024-06-19T12:00:00Z"),
    },
  ]);

  useEffect(() => {
    // Retrieve the message from backend
    // if response is success and check for loading and isAuthenticated
    setChannelPost([
      {
        postedBy: "JaneSmith",
        postedTo: "Alpha Group",
        message:
          "Welcome to the Alpha Group! Let's get started with our project.",
        postedOn: stringToDate("2024-06-19T12:00:00Z"),
      },
      {
        postedBy: "CarolWhite",
        postedTo: "Kontribution",
        message:
          "Please contribute your ideas for the upcoming event in the Kontribution channel.",
        postedOn: stringToDate("2024-06-19T12:00:00Z"),
      },
      {
        postedBy: "DaveBlack",
        postedTo: "Hostel",
        message:
          "Hostel residents are invited to a community dinner this weekend.",
        postedOn: stringToDate("2024-06-19T12:00:00Z"),
      },
      {
        postedBy: "BobBrown",
        postedTo: "Gaming",
        message: "Join us for a gaming session tonight at 8 PM.",
        postedOn: stringToDate("2024-06-19T12:00:00Z"),
      },
      {
        postedBy: "JaneSmith",
        postedTo: "Alpha Group",
        message:
          "Welcome to the Alpha Group! Let's get started with our project.",
        postedOn: stringToDate("2024-06-19T12:00:00Z"),
      },
      {
        postedBy: "CarolWhite",
        postedTo: "Kontribution",
        message:
          "Please contribute your ideas for the upcoming event in the Kontribution channel.",
        postedOn: stringToDate("2024-06-19T12:00:00Z"),
      },
      {
        postedBy: "DaveBlack",
        postedTo: "Hostel",
        message:
          "Hostel residents are invited to a community dinner this weekend.",
        postedOn: stringToDate("2024-06-19T12:00:00Z"),
      },
      {
        postedBy: "BobBrown",
        postedTo: "Gaming",
        message: "Join us for a gaming session tonight at 8 PM.",
        postedOn: stringToDate("2024-06-19T12:00:00Z"),
      },
    ]);
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
    <Layout>
      <NavBar />
      <div className="mx-auto my-10 p-4 py-8 w-11/12 h-[85vh] grid grid-cols-4 bg-stone-100 rounded-3xl justify-center r align-middle">
        <SideBar
          selectedChannel={selectedChannel}
          onClickChannelListOption={handleChannelSelection}
          sidebarList={sideBarChannelList}
        />
        <ChannelPosts posts={channelPost} />
      </div>
    </Layout>
  );
};

export default Dashboard;
