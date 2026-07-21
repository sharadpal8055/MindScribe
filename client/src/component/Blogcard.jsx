import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { image, category, description, title, _id } = blog;
  const navigate = useNavigate();


  return (
   <div
  onClick={() => navigate(`/blog/${_id}`)}
  className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
>
  <div className="overflow-hidden">
    <img
      src={image}
      alt={title}
      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  <div className="p-5">
    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
      {category}
    </span>

    <h2 className="mt-4 line-clamp-2 text-xl font-bold text-gray-900">
      {title}
    </h2>

    <p
      className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600"
      dangerouslySetInnerHTML={{ __html: description }}
    />

    <div className="mt-5 flex items-center justify-between">
      <span className="text-sm font-medium text-blue-600 group-hover:underline">
        Read More →
      </span>
    </div>
  </div>
</div>
  );
};

export default BlogCard;