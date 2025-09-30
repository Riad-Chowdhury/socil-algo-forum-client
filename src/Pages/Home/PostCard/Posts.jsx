import React from "react";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { NavLink } from "react-router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://socil-algo-forum-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="shadow-2xl">
      <div className=" flex justify-between mt-7">
        <h1 className="text-3xl text-teal-600 font-bold"> Share Post</h1>

        <NavLink to={"/createPostForm"}>
          <button className="btn btn-active btn-primary">Add Post</button>
        </NavLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
