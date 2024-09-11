import { React } from "react";
import { Route, Routes } from "react-router-dom";

// pages
import FeedPosts from "./components/FeedPost/FeedPosts";
import Search from "./components/Search/Search";
import ProfileMain from "./components/Profile/ProfileMain";
import AuthForm from "./components/AuthForm/AuthForm";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Layout>
      <div className="w-full md:max-w-xl lg:max-w-2xl mx-auto">
        <Routes>
          <Route path="/" element={<FeedPosts />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<ProfileMain />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </div>
    </Layout>
  );
}

// sm:max-w-xl md:max-w-2xl mx-auto mt-4

{
  /* <div className="bg-gray-50 min-h-screen">
  <Navbar />
  <div className="flex">
    <Sidebar />
    <main className="flex-grow p-8">
      <Routes>
        <Route path="/" element={<FeedPosts />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </main>
    <Sidebar />
  </div>
</div>; */
}
