import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPosts } from "../../store";
import { useThunk } from "../../hooks/use-thunk";
import FeedPost from "./FeedPost";
import FeedCreate from "../FeedCreate/FeedCreate";

export default function FeedPosts() {
  const [doFetchPosts, isLoadingPosts, loadingUserError] = useThunk(fetchPosts);

  useEffect(() => {
    doFetchPosts();
  }, [doFetchPosts]);

  const { posts } = useSelector((state) => {
    return state.posts;
  });

  let content;

  if (isLoadingPosts) {
    content = <div>Loading...</div>;
  } else if (loadingUserError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = posts.map((post) => {
      return <FeedPost post={post} key={post.id} />;
    });
  }

  return (
    <div>
      <FeedCreate />
      <div>{content}</div>
    </div>
  );
}
