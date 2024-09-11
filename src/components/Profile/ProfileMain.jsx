import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";
import { useState, useEffect } from "react";
import { useThunk } from "../../hooks/use-thunk";
import { fetchUser, fetchProfilePosts } from "../../store";
import useAuthContext from "../../hooks/useAuthContext";
import { useSelector } from "react-redux";

export default function ProfileMain() {
  const [doFetchProfile, loadingFetchProfile, loadingFetchProfileError] =
    useThunk(fetchUser);
  const [doFetchPosts, loadingFetchPosts, loadingFetchPostsError] =
    useThunk(fetchProfilePosts);

  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.posts);

  console.log("This is the user profile posts: ", posts);

  const [activeTab, setActiveTab] = useState("posts");

  const { currentUser } = useAuthContext();
  const uid = currentUser?.uid;

  // console.log("This is the user id: ", uid);

  useEffect(() => {
    if (uid) {
      doFetchProfile({ uid });
      doFetchPosts({ uid });
    }
  }, [uid, doFetchProfile, doFetchPosts]);

  const handleTabClick = (activeTab) => {
    setActiveTab(activeTab);
  };

  const tabContent =
    activeTab === "reposts" ? (
      <div>This is reposts...</div>
    ) : activeTab === "replies" ? (
      <div>This is replies...</div>
    ) : (
      <ProfilePosts />
    );

  return (
    <div className="border p-4 rounded-lg">
      <ProfileHeader user={user} />
      <ProfileTabs activeTab={activeTab} handleTabClick={handleTabClick} />
      {tabContent}
    </div>
  );
}
