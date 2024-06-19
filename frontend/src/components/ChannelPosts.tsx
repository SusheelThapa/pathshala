import { ChannelPost } from "../types/types";
import { stringToDate } from "../utils/stringToDate";
import AddChannelPost from "../components/AddChannelPost";
import NoPermission from "./NoPermission";

interface Props {
  posts: ChannelPost[];
  currentPage: number;
  handlePageChange: (currentPage: number) => void;
  handleAddNewPost: (newPost: { message: string }) => void;
  permission: {
    create: boolean;
    read: boolean;
    delete: boolean;
  };
}

const ChannelPosts = ({
  posts,
  currentPage,
  handlePageChange,
  handleAddNewPost,
  permission,
}: Props) => {
  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const displayPages = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    handlePageChange(pageNumber);
  };

  const getPostAgeString = (providedDate: Date): string => {
    const currentDate = new Date();

    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = 60 * millisecondsPerSecond;
    const millisecondsPerHour = 60 * millisecondsPerMinute;
    const millisecondsPerDay = 24 * millisecondsPerHour;
    const millisecondsPerWeek = 7 * millisecondsPerDay;
    const millisecondsPerMonth = 30.44 * millisecondsPerDay; // Approximate value for a month
    const millisecondsPerYear = 365.25 * millisecondsPerDay; // Approximate value for a year

    const timeDifference = currentDate.getTime() - providedDate.getTime();
    const years = Math.floor(timeDifference / millisecondsPerYear);
    const months = Math.floor(timeDifference / millisecondsPerMonth);
    const weeks = Math.floor(timeDifference / millisecondsPerWeek);
    const days = Math.floor(timeDifference / millisecondsPerDay);
    const hours = Math.floor(timeDifference / millisecondsPerHour);
    const minutes = Math.floor(timeDifference / millisecondsPerMinute);
    const seconds = Math.floor(timeDifference / millisecondsPerSecond);

    return years > 0
      ? `${years} year${years > 1 ? "s" : ""} ago`
      : months > 0
      ? `${months} month${months > 1 ? "s" : ""} ago`
      : weeks > 0
      ? `${weeks} week${weeks > 1 ? "s" : ""} ago`
      : days > 0
      ? `${days} day${days > 1 ? "s" : ""} ago`
      : hours > 0
      ? `${hours} hour${hours > 1 ? "s" : ""} ago`
      : minutes > 0
      ? `${minutes} minute${minutes > 1 ? "s" : ""} ago`
      : `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));

    for (
      let i = startPage;
      i <= Math.min(totalPages, startPage + displayPages - 1);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-2 p-2  flex justify-center items-center rounded-md font-bold   ${
            currentPage === i
              ? "bg-[#f96a46] text-white text-base w-10 h-10"
              : "bg-gray-200 text-gray-500 text-sm w-8 h-8 hover:bg-[#f96a46] hover:bg-opacity-70 hover:text-white"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className=" text-sm col-span-4 w-full flex flex-col justify-between items-center">
      <div className="w-full flex flex-col justify-between items-center">
        {permission.create ? (
          <AddChannelPost handleAddNewPost={handleAddNewPost} />
        ) : (
          <NoPermission />
        )}
        {permission.read && (
          <div className="flex justify-center flex-col items-center gap-6 m-6 w-full">
            {currentPosts.map(({ postedBy, message, postedOn, _id }) => {
              return (
                <div
                  key={_id}
                  className="rounded-2xl bg-white px-12 py-6 w-4/5 flex flex-col gap-6"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex gap-5  items-center">
                      <div className="text-lg text-gray-600 flex flex-col">
                        <div>{postedBy.toUpperCase()}</div>
                        <div className="text-sm text-stone-400">
                          {getPostAgeString(stringToDate(postedOn))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-base text-black">{message}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {permission.read && (
        <div className="flex justify-center items-center  mt-4 text-lg">
          {currentPage > 1 && (
            <button
              onClick={() => paginate(currentPage - 1)}
              className="mx-2 p-2 rounded-md  text-gray-500 font-bold hover:text-[#f96a46]"
            >
              &lt; Previous
            </button>
          )}
          {renderPageNumbers()}
          {currentPage < totalPages && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="mx-2 p-2 rounded-md text-gray-500 font-bold hover:text-[#f96a46]"
            >
              Next &gt;
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ChannelPosts;
