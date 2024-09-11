import { Link } from "react-router-dom";
import { SiSubstack } from "react-icons/si";
import { GoHome } from "react-icons/go";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { HiLogout } from "react-icons/hi";

export default function Sidebar() {
  const links = [
    { icon: <GoHome />, text: "Home", path: "/" },
    {
      icon: <MdOutlineNotificationsActive />,
      text: "Activity",
      path: "/activity",
    },
    { icon: <FiSearch />, text: "Search", path: "/search" },
    { icon: <RiUserLine />, text: "Profile", path: "/profile" },
  ];

  const transitionClass = "transition ease-in-out delay-150";

  return (
    <nav className="fixed bottom-0 left-0 w-full md:top-0 md:h-full md:w-20 bg-white border">
      <div className="mx-2 md:flex md:flex-col md:justify-between md:items-center md:h-full">
        {/* Logo Section */}
        <Link
          to="/"
          className="transition ease-in-out delay-150 hidden md:inline-block p-3 rounded-xl 
          hover:bg-gray-100 my-4 fixed top-0 md:relative"
        >
          <SiSubstack className="text-4xl" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex justify-center items-center space-x-2 relative md:flex-col md:space-x-0">
          {links.map((link, index) => (
            <li
              key={index}
              className="transition ease-in-out delay-150 flex justify-center p-3 md:border-none flex-1 
              rounded-xl hover:bg-orange-500 hover:text-white"
            >
              <Link to={link.path} className="text-4xl">
                {link.icon}
              </Link>
            </li>
          ))}

          {/* Add Button */}
          <button
            className="transition ease-in-out delay-150 bg-orange-500 p-3 rounded-xl hover:bg-orange-600 
            absolute bottom-20 right-0 md:relative md:bottom-0 md:mt-8"
          >
            <GrAdd className="text-4xl text-white" />
          </button>
        </ul>

        {/* Logout Button */}
        <button
          className="transition ease-in-out delay-150 hidden md:inline-block rounded-xl p-3 
        hover:bg-gray-100 my-4"
        >
          <HiLogout className="text-4xl" />
        </button>
      </div>
    </nav>
  );
}
