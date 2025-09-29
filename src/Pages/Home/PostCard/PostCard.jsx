import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaComment,
  FaShareAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { MdDelete } from "react-icons/md";

import { FacebookShareButton } from "react-share";
import Swal from "sweetalert2";

const PostCard = ({ post }) => {
  const { _id, authorAvatar, authorName, postImage, publishDate, tags, title } =
    post;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      fetch(`http://localhost:3000/posts/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("after", data);
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success",
            });
          }
        });
    });
  };

  // ✅ State for likes/dislikes
  const [votes, setVotes] = useState({ up: 0, down: 0 });

  const handleLike = () => setVotes((prev) => ({ ...prev, up: prev.up + 1 }));
  const handleDislike = () =>
    setVotes((prev) => ({ ...prev, down: prev.down + 1 }));

  const totalVotes = votes.up - votes.down;

  const shareUrl = window.location.href;

  return (
    <div className=" ">
      <div className="max-w-md mx-auto bg-white border rounded-lg shadow-md p-4 mb-6">
        {/* Author + Date */}
        <div className="flex items-center mb-3">
          <img
            src={authorAvatar}
            alt="avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold">{authorName}</h3>
            <p className="text-xs text-gray-500">
              {new Date(publishDate).toDateString()}
            </p>
          </div>
        </div>

        {/* Post Image */}
        {postImage && (
          <img
            src={postImage}
            alt="post"
            className="w-full h-48 object-cover rounded-md mb-3"
          />
        )}

        {/* Title */}
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3 justify-between">
          <span className="px-2 py-1 text-bold text-blue-500 rounded">
            {tags}
          </span>

          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              <BsThreeDotsVertical />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu  rounded-box z-1 w-20  p-2 shadow-sm"
            >
              <li>
                {" "}
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn bg-pink-800 text-white"
                >
                  DELETE
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className="flex items-center gap-1 text-green-600"
            >
              <FaThumbsUp /> {votes.up}
            </button>
            <button
              onClick={handleDislike}
              className="flex items-center gap-1 text-red-600"
            >
              <FaThumbsDown /> {votes.down}
            </button>
            <button className="flex items-center gap-1 text-gray-600">
              <FaComment /> 0
            </button>
            <span className="text-gray-700">Total: {totalVotes}</span>
          </div>

          {/* Details Button */}
          <Link to={`/Details/${_id}`}>
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">
              Details
            </button>
          </Link>
          {/* Share */}
          <div className="flex gap-2">
            <FacebookShareButton url={shareUrl} quote={title}>
              <FaShareAlt className="text-blue-600" />
            </FacebookShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
