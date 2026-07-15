import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        {/* AI Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-5 py-2 shadow-sm backdrop-blur">
          <img src={assets.star_icon} alt="" className="h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">
             New: AI-Powered Writing Assistant
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
          Write Better Blogs with the
          <span className="text-blue-600"> Power of AI</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          MindScribe helps you create, edit, summarize, and publish engaging
          blog posts using AI. Discover articles, share your ideas, and elevate
          your writing experience with a modern blogging platform built on the
          MERN stack.
        </p>

        {/* Search */}
        <form className="mt-10 flex w-full max-w-xl items-center overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search blogs..."
            required
            className="flex-1 px-5 py-4 text-gray-700 outline-none"
          />

          <button
            type="submit"
            className="bg-black px-6 py-4 font-medium text-white transition hover:bg-gray-800"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Header;
