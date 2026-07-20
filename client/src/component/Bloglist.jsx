import React from "react";
import { blogCategories } from "../assets/assets";

const BlogList = () => {
  return (
    <section className="py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 px-6">
        {blogCategories.map((item) => (
          <button
            key={item}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-black hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BlogList;