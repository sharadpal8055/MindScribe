import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-[calc(100vh-64px)] border-r bg-white">
      <div className="p-4">
  <NavLink
    to="/admin/dashboard"
    className={({ isActive }) =>
      `flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition ${
        isActive
          ? "bg-black text-white"
          : "text-gray-800 hover:bg-gray-100"
      }`
    }
  >
    <img
      src={assets.dashboard_icon_4}
      alt="Dashboard"
      className="h-5 w-5"
    />
    <span>Dashboard</span>
  </NavLink>
</div>

      <nav className="flex flex-col gap-2 px-4">
        <NavLink
          to="/admin/add-blog"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <img
            src={assets.add_icon}
            alt=""
            className="h-5 w-5"
          />

          <span>Add Blog</span>
        </NavLink>

        <NavLink
          to="/admin/blog-list"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <img
            src={assets.blog_icon}
            alt=""
            className="h-5 w-5"
          />

          <span>Blog List</span>
        </NavLink>

        <NavLink
          to="/admin/comments"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <img
            src={assets.comment_icon}
            alt=""
            className="h-5 w-5"
          />

          <span>Comments..</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;