import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/admin/Sidebar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 bg-gray-50 min-h-[calc(100vh-64px)] p-8">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;