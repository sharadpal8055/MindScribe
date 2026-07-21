import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white px-8 py-14 text-center shadow-sm">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
          📬 Stay Updated
        </span>

        <h2 className="mt-6 text-4xl font-bold text-gray-900">
          Never Miss an Article
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Subscribe to the MindScribe newsletter and receive the latest AI, web
          development, programming, and technology articles directly in your
          inbox.
        </p>

        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
