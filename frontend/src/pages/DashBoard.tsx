// components/Dashboard.tsx
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { ChannelPost } from "../types/types";
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
  const [channelPost, setChannelPost] = useState<ChannelPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

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
          console.log(response.data);
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
    setCurrentPage(1);
  };

  const handleAddNewPost = async (newPost: { message: string }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/channelpost",
        {
          postedBy: localStorage.getItem("username"),
          postedTo: selectedChannel,
          message: newPost.message,
        }
      );

      if (response.status == 201) {
        setChannelPost([response.data, ...channelPost]);
      }
    } catch (error) {
      console.log(error);
    }
    //  API call to add new post
    console.log(newPost);
  };
  return (
    <Layout>
      <NavBar />
      <div className="mx-auto my-16 p-4 py-8 w-11/12 h-[85vh]  grid grid-cols-5 bg-stone-100 rounded-3xl justify-center r align-middle">
        <SideBar
          selectedChannel={selectedChannel}
          onClickChannelListOption={handleChannelSelection}
          sidebarList={sideBarChannelList}
        />
        <ChannelPosts
          posts={channelPost}
          currentPage={currentPage}
          handlePageChange={setCurrentPage}
          handleAddNewPost={handleAddNewPost}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
