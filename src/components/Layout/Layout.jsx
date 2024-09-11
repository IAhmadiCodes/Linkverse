import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-1 flex-col">
        <Sidebar />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
