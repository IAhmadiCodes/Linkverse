import React, { useState } from "react";
import Button from "../Common/Button";
import InputField from "../Common/InputField";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between gap-2 border p-4"
    >
      <div className="relative w-full flex items-center">
        <IoSearch className="absolute left-0 ml-4 text-xl" />
        <InputField
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 text-lg -my-0"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
