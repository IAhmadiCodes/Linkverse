import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiSubstack } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import InputField from "../Common/InputField";

export default function Header() {
  const [search, setSearch] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    // Add search handling logic here
  };

  return (
    <header className="w-full bg-white border-b">
      <nav className="flex items-center justify-between mx-4 py-2">
        <Link
          to="/"
          className="p-3 rounded-xl hover:bg-gray-100 transition ease-in-out"
        >
          <SiSubstack className="text-4xl" />
        </Link>

        <div className="flex items-center gap-3">
          <form
            onSubmit={handleSearchClick}
            className="relative flex items-center"
          >
            <FiSearch className="absolute left-3 text-xl" />
            <InputField
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search"
              className="pl-10 pr-4 py-2 w-auto md:w-[500px] text-lg border rounded-full focus:outline-none"
            />
          </form>

          <div className="relative">
            <img
              src=""
              alt="Profile"
              className="h-12 w-12 rounded-full bg-gray-500"
            />
            <IoIosArrowDropdown className="absolute right-0 bottom-0 text-2xl bg-white rounded-full" />
          </div>
        </div>
      </nav>
    </header>
  );
}
