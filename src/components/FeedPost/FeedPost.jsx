import FeedHeader from "./FeedHeader";
import FeedActions from "./FeedActions";

export default function FeedPost({ post }) {
  return (
    <div className="p-4 border mt-4 lg:rounded-lg md:rounded-lg">
      <FeedHeader post={post} />
      <div className="p-2">
        <p>{post.postText}</p>
        {post.postFile && <img src={post.postFile} alt="image" />}
      </div>
      <FeedActions post={post} />
    </div>
  );
}
