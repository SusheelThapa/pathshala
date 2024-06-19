import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ChannelPost } from "../types/types";

interface Props {
  handleAddNewPost: (newPost: ChannelPost) => void;
}
const AddChannelPost = ({ handleAddNewPost }: Props) => {
  const [isPostFormActive, setPostFormActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setPostFormActive(true)}
        className="py-4 text-lg hover:bg-[#f96a46] hover:text-white flex  justify-center items-center gap-4 m-6 w-4/5 bg-white rounded-xl"
      >
        <AiOutlinePlus size={24} />
        <div className="flex justify-center items-center font-extrabold">
          Add Post
        </div>
      </div>
      {/* {isPostFormActive && (
        <AddPostForm
          handleAddNewPost={handleAddNewPost}
          isFormActive={setPostFormActive}
        />
      )} */}
    </>
  );
};

export default AddChannelPost;
