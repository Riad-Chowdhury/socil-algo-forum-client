import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const { authorName, authorAvatar, publishDate, postImage, title, tags } =
    useLoaderData();

  return (
    <div className="">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
        {/* Author Info */}
        <div className="flex items-center mb-4">
          <img
            src={authorAvatar}
            alt="author"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold text-lg">{authorName}</h2>
            <p className="text-gray-500 text-sm">{publishDate}</p>
          </div>
        </div>

        {/* Post Image */}
        {postImage && (
          <img
            src={postImage}
            alt={title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}

        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">{title}</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
            {tags}
          </span>
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed"></p>
      </div>
    </div>
  );
};

export default PostDetails;
