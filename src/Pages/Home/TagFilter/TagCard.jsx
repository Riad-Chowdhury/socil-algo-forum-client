import React from "react";

const TagCard = ({ tags }) => {
  const { tag, name } = tags;
  return (
    <div>
      <div className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
        <h3 className="font-bold text-lg">{tag}</h3>
        <p className="text-sm text-amber-600 mt-1">{name}</p>
      </div>
    </div>
  );
};

export default TagCard;
