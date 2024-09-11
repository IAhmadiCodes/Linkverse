import EditProfile from "./EditProfile";

export default function ProfileHeader({ user }) {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{user?.fullName}</h2>
          <span className="text-gray-600">@{user?.userName}</span>
        </div>
        <img
          src=""
          alt="Profile image"
          className="bg-gray-700 h-24 w-24 rounded-lg"
        />
      </div>

      <div className="flex justify-between my-4">
        <div className="flex gap-1 items-center text-lg">
          <span className="font-semibold">{user.posts.length}</span>
          <span>Posts</span>
        </div>
        <div className="flex gap-1 items-center text-lg">
          <span className="font-semibold">{user.followers.length}</span>
          <span>Followers</span>
        </div>
        <div className="flex gap-1 items-center text-lg">
          <span className="font-semibold">{user.following.length}</span>
          <span>Following</span>
        </div>
      </div>

      <EditProfile />
    </div>
  );
}

// console.log("This is the user id: ", uid);
// console.log("Fetched user data:", user);
// console.log("Fetched user data:", user.fullName);
