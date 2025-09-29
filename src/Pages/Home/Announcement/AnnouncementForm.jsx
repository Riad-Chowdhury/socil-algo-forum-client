import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const AnnouncementForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("active");
  //   const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const announcement = Object.fromEntries(formData.entries());
    console.log(announcement);

    axios
      .post("http://localhost:3000/announcement", announcement)
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Announcement</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1">Status</label>
          <select
            value={status}
            name="status"
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 text-white p-2 rounded hover:bg-amber-700"
        >
          Add Announcement
        </button>
      </form>
    </div>
  );
};

export default AnnouncementForm;
