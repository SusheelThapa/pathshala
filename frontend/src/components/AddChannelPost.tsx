import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddChannelPostForm from "./AddChannelPostForm";

interface Props {
  handleAddNewPost: (newPost: { message: string }) => void;
}
const AddChannelPost = ({ handleAddNewPost }: Props) => {
  const [isPostFormActive, setPostFormActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setPostFormActive(true)}
        className="py-4 text-lg hover:bg-[#f96a46ee] hover:text-white flex  justify-center items-center gap-4 m-6 w-4/5 bg-white rounded-xl cursor-pointer"
      >
        <AiOutlinePlus size={24} />
        <div className="flex justify-center items-center font-extrabold">
          Add Post
        </div>
      </div>
      {isPostFormActive && (
        <AddChannelPostForm
          handleAddNewPost={handleAddNewPost}
          isFormActive={setPostFormActive}
        />
      )}
    </>
  );
};

export default AddChannelPost;
