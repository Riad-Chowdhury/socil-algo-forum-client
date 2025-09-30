import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function CreatePostForm() {
  const [formData, setFormData] = useState({
    authorName: "",
    authorAvatar: "",
    publishDate: "",
    postImage: "",
    title: "",
    tags: "",
    upVote: 0,
    downVote: 0,
    comments: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const posts = Object.fromEntries(formData.entries());
    console.log(posts);

    axios
      .post("https://socil-algo-forum-server.vercel.app/posts", posts)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    // Reset form
    setFormData({
      authorName: "",
      authorAvatar: "",
      publishDate: "",
      postImage: "",
      title: "",
      tags: "",
      upVote: 0,
      downVote: 0,
      comments: 0,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-2xl mt-8 mb-7 rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Post</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Author Name */}
        <div>
          <label className="block mb-1 font-medium">Author Name</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Author Avatar URL */}
        <div>
          <label className="block mb-1 font-medium">Author Avatar URL</label>
          <input
            type="text"
            name="authorAvatar"
            value={formData.authorAvatar}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://example.com/avatar.jpg"
          />
        </div>

        {/* Publish Date */}
        <div>
          <label className="block mb-1 font-medium">Publish Date</label>
          <input
            type="date"
            name="publishDate"
            value={formData.publishDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Post Image URL */}
        <div>
          <label className="block mb-1 font-medium">Post Image URL</label>
          <input
            type="text"
            name="postImage"
            value={formData.postImage}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://example.com/post.jpg"
          />
        </div>

        {/* Post Title */}
        <div>
          <label className="block mb-1 font-medium">Post Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-1 font-medium">
            Tags (comma separated)
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="React, JavaScript, MongoDB"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
}
