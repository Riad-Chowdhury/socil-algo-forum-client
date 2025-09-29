import React, { useState } from "react";
import Banner from "./Babber/Banner";
import TagFilter from "./TagFilter/TagFilter";
import { useLoaderData } from "react-router";
import AnnouncementForm from "./Announcement/AnnouncementForm";
import PostCard from "./PostCard/PostCard";
import Posts from "./PostCard/Posts";
// import Posts from "./PostCard/Posts";

const Home = () => {
  const tagData = useLoaderData();
  const [phones, setPhones] = useState(tagData);
  console.log(tagData);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === "") return setPhones(tagData);
    // console.log(text);
    const searchPhones = tagData.filter(
      (phone) =>
        phone.tag.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    console.log(searchPhones);

    setPhones(searchPhones);
  };

  return (
    <div>
      <Banner handleSearch={handleSearch}></Banner>
      <TagFilter tagData={phones}></TagFilter>
      {/* <Posts></Posts> */}
      <Posts></Posts>
    </div>
  );
};

export default Home;
