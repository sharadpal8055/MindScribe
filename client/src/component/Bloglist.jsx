import React, { useState } from "react";
import { blogCategories } from "../assets/assets";
import BlogCard from "./Blogcard";

import { blog_data } from "../assets/assets";
const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <>
      <section className="py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 px-6">
          {blogCategories.map((item) => (
            <button
              key={item}
              onClick={() => setMenu(item)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition duration-200 ${
                menu === item
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>
     <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {blog_data
    .filter((blog) => (menu === "All" ? true : blog.category === menu))
    .map((blog) => (
      <BlogCard key={blog._id} blog={blog} />
    ))}
</div>
    </>
  );
};

export default BlogList;
