import { Link } from "react-router-dom";
import { removePost } from "../../store";
import { useThunk } from "../../hooks/use-thunk";
import { GoSync } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

export default function FeedHeader({ post }) {
  const [doRemovePost, isLoading, postLoadingError] = useThunk(removePost);

  const handleRemovePost = () => {
    doRemovePost({ post });
  };

  return (
    <div className="flex items-center justify-between">
      <Link to="/profile" className="flex items-center gap-2">
        <a href="">
          <img
            src=""
            alt="profile image"
            className="bg-gray-700 rounded-full h-10 w-10"
          />
        </a>

        <span className="text-sm hover:underline">iamismaoo</span>
      </Link>

      <div>
        <button className="text-2xl" onClick={handleRemovePost}>
          {isLoading ? (
            <GoSync className="animate-spin text-lg" />
          ) : (
            <RxCross2 className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
}
