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
import axios from "axios";

const sideBarChannelList = [
  {
    icon: <SiDailydotdev />,
    title: "Daily Notice",
    endPoint: "daily-notice",
  },
  {
    icon: <TbDelta />,
    title: "Delta Group",
    endPoint: "delta-group",
  },
  {
    icon: <TbBeta />,
    title: "Beta Group",
    endPoint: "beta-group",
  },
  {
    icon: <SiYoutubegaming />,
    title: "Gaming",
    endPoint: "gaming",
  },
  {
    icon: <SiOpensourcehardware />,
    title: "Kontribution",
    endPoint: "kontribution",
  },
  {
    icon: <FaHome />,
    title: "Hostel",
    endPoint: "hostel",
  },
  {
    icon: <FaBaby />,
    title: "General",
    endPoint: "general",
  },
];
const Dashboard: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const [selectedChannel, setSelectedChannel] =
    useState<string>("daily-notice");
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
    const fetchChannelPost = async () => {
      try {
        let fetchURL = "http://localhost:3001/api/channelpost";
        if (selectedChannel == null) {
          fetchURL += "?channel=daily-notice";
        } else {
          fetchURL += `?channel=${selectedChannel}`;
        }
        const response = await axios.get(fetchURL);

        if (response.status == 200) {
          console.log(response.data)
          setChannelPost(response.data);
        }
      } catch (error) {
        console.log(error);
        setChannelPost([]);
      }
    };
    fetchChannelPost();
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
