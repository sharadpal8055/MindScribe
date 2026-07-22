import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";

const Blog = () => {
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const [comment, setcomment] = useState([]);
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const fetchData = async () => {
    const Blogdata = blog_data.find((item) => item._id === id);
    setdata(Blogdata);
  };
  const fetchCommentData = async () => {
    setcomment(comments_data);
  };
  const addComment = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    fetchData();
    fetchCommentData();
  }, []);
  return data ? (
    <>
      <Navbar />

      <main className="bg-gray-50">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-16 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            {data.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            {data.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            {data.subTitle}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={assets.user_icon}
              alt=""
              className="h-12 w-12 rounded-full border"
            />

            <div className="text-left">
              <h4 className="font-semibold">MindScribe Team</h4>
              <p className="text-sm text-gray-500">
                Published on{" "}
                {new Date(data.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="mx-auto mt-12 max-w-6xl px-6">
          <img
            src={data.image}
            alt=""
            className="h-[550px] w-full rounded-3xl object-cover shadow-xl"
          />
        </section>
        {/* Blog Content */}
       <section className="mx-auto max-w-4xl px-6 py-16">
  <article className="rounded-3xl bg-white p-10 shadow-sm">
    <div
      className="rich-text"
      dangerouslySetInnerHTML={{ __html: data.description }}
    />
  </article>
</section>

        {/* Share */}
        <section className="mx-auto max-w-4xl px-6 pb-12">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold">Share this article</h3>

            <div className="flex flex-wrap gap-4">
              {["Facebook", "Instagram", "LinkedIn", "X", "WhatsApp"].map(
                (item) => (
                  <button
                    key={item}
                    className="rounded-full border border-gray-300 px-6 py-3 transition hover:bg-black hover:text-white"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Comments */}
        <section className="mx-auto mt-20 max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold">Comments {comment.length}</h2>

          {/* Comment */}
          <div className="space-y-6">
            {comment.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-gray-200 p-5"
              >
                <img
                  src={assets.user_icon}
                  alt=""
                  className="h-12 w-12 rounded-full"
                />

                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold">{item.name}</h4>

                    <p className="text-sm text-gray-500">
                      Published on{" "}
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <p className="mt-2 text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-8" />

          <h3 className="mb-6 text-2xl font-bold">Add Your Comment</h3>

          <form
            onSubmit={addComment}
            className="mt-10 rounded-3xl bg-gray-50 p-8"
          >
            <h3 className="mb-6 text-3xl font-bold">Add Your Comment</h3>

            <div className="space-y-5">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500"
              />

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
                placeholder="Write your comment..."
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="rounded-xl bg-black px-8 py-3 text-white transition hover:bg-gray-800"
              >
                Submit Comment
              </button>
            </div>
          </form>
        </section>
        <Footer />
      </main>
    </>
  ) : (
    <h1>Loading....</h1>
  );
};

export default Blog;
