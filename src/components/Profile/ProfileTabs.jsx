import { Link } from "react-router-dom";

export default function ProfileTabs({ activeTab, handleTabClick }) {
  return (
    <div className="flex justify-center text-center text-lg items-center mt-4 border">
      <Link
        to=""
        onClick={() => handleTabClick("posts")}
        className={`${
          activeTab === "posts"
            ? "border-b-2 border-black transition ease-in-out delay-100 hover:bg-gray-100"
            : ""
        } flex-1 py-2 font-medium`}
      >
        Posts
      </Link>
      <Link
        to=""
        onClick={() => handleTabClick("replies")}
        className={`${
          activeTab === "replies"
            ? "border-b-2 border-black transition ease-in-out delay-100 hover:bg-gray-100"
            : ""
        } flex-1 py-2 font-medium`}
      >
        Replies
      </Link>
      <Link
        to=""
        onClick={() => handleTabClick("reposts")}
        className={`${
          activeTab === "reposts"
            ? "border-b-2 border-black transition ease-in-out delay-100 hover:bg-gray-100"
            : ""
        } flex-1 py-2 font-medium`}
      >
        Reposts
      </Link>
    </div>
  );
}
