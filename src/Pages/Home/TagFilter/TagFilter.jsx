// import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import TagCard from "./TagCard";

const TagFilter = ({ tagData }) => {
  // const { tag, name } = tagData;
  // console.log(tagData);

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mt-9 mb-9 font-bold">
        Tags Collection
      </h1>
      <NavLink className={"mt-6"} to={"/addTags"}>
        <button className="brn px-4 py-1 bg-slate-500 rounded-full text-white">
          AddTags
        </button>
      </NavLink>
      <div
        data-aos="fade-down-right "
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3"
      >
        {tagData.map((tags) => (
          <TagCard key={tags.id} tags={tags}></TagCard>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
