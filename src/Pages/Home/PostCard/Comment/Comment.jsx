import { useState, useEffect } from "react";
import { FaComment } from "react-icons/fa";

const Comment = ({ postId }) => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // fetch comments for this post
  useEffect(() => {
    if (open) {
      fetch(`socil-algo-forum-server.vercel.app/comments/${postId}`)
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch((err) => console.error(err));
    }
  }, [open, postId]);

  // add new comment
  const handleAddComment = (e) => {
    e.preventDefault();

    if (!newComment.trim()) return;

    const commentData = {
      postId,
      text: newComment,
      date: new Date(),
    };

    fetch("https://socil-algo-forum-server.vercel.app/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments((prev) => [...prev, data]);
        setNewComment("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="relative">
      {/* Comment Icon */}
      <div className="cursor-pointer relative" onClick={() => setOpen(!open)}>
        <FaComment className="text-xl text-gray-700" />
        {comments.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {comments.length}
          </span>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white border rounded shadow-lg z-50">
          <div className="font-semibold px-4 py-2 border-b">Comments</div>
          <ul className="max-h-40 overflow-y-auto">
            {comments.length > 0 ? (
              comments.map((c, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 border-b text-sm text-gray-700"
                >
                  {c.text}
                  <p className="text-xs text-gray-400">
                    {new Date(c.date).toLocaleString()}
                  </p>
                </li>
              ))
            ) : (
              <p className="px-4 py-2 text-sm text-gray-500">No comments yet</p>
            )}
          </ul>

          {/* Add Comment */}
          <form
            onSubmit={handleAddComment}
            className="flex items-center gap-2 p-2 border-t"
          >
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border rounded p-1 text-sm"
            />
            <button
              type="submit"
              className="bg-amber-600 text-white px-3 py-1 rounded text-sm hover:bg-amber-700"
            >
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Comment;
