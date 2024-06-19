import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Props {
  isFormActive: (bool: boolean) => void;
  handleAddNewPost: (newPost: { message: string }) => void;
}

const AddChannelPostForm = ({ isFormActive, handleAddNewPost }: Props) => {
  const [formData, setFormData] = useState<{ message: string }>({
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddNewPost(formData);
    isFormActive(false);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xl z-50 flex justify-center items-center">
      <div className="bg-gray-100 py-12 px-12 rounded-3xl w-5/12 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-[#f96a46]">
            Create a New Post
          </h2>
          <button
            onClick={() => {
              isFormActive(false);
            }}
            className="text-gray-700 hover:bg-[#f96a46] rounded-md focus:outline-none hover:text-white"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <form className="flex flex-col gap-3 mt-3" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-xl font-medium text-gray-800 mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows={4}
              value={formData.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setFormData({ ...formData, message: e.target.value });
              }}
              className="mt-1 p-3 text-base border border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#f57251] bg-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-3 text-xl bg-[#f96a46] hover:bg-[#f65b35] text-white font-bold py-3 px-4 rounded-lg focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddChannelPostForm;
