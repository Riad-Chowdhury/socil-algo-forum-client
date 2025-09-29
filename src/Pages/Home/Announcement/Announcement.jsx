import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { TfiAnnouncement } from "react-icons/tfi";
const Announcement = () => {
  const [count, setCount] = useState(0);
  const [announcements, setAnnouncements] = useState([]);
  const [open, setOpen] = useState(false);

  // Fetch announcement count
  useEffect(() => {
    fetch("http://localhost:3000/announcements/count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error(err));
  }, []);

  // Fetch announcement list
  useEffect(() => {
    if (open && announcements.length === 0) {
      fetch("http://localhost:3000/announcements")
        .then((res) => res.json())
        .then((data) => setAnnouncements(data))
        .catch((err) => console.error(err));
    }
  }, [open, announcements.length]);

  return (
    <div className="relative">
      {/* Bell Icon */}
      <div className="cursor-pointer relative" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a1 1 0 10-2 0v.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>

        {/* Badge */}
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>

      {/* Dropdown Menu */}
      {open && count > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-50">
          <div className="font-semibold px-4 py-2 border-b flex justify-between">
            <h4 className="">Announcements</h4>
            <NavLink to={"/announcementForm"}>
              {" "}
              <TfiAnnouncement className="font-bold text-2xl text-green-500" />
            </NavLink>
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {announcements.map((item) => (
              <li
                key={item._id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">{item.message}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Announcement;
