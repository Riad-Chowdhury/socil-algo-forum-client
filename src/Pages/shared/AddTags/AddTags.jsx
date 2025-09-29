import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const AddTags = () => {
  const handleTag = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tags = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:3000/tags", tags)
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
    console.log(tags);
  };

  return (
    <div>
      <div className=" bg-fuchsia-400-200 min-h-screen">
        <h1 className="text-5xl font-bold text-teal-300 text-center mt-14 mb-12 text-shadow-base-200">
          Add Tag
        </h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleTag}>
                <fieldset className="fieldset">
                  <label className="label">Tag Title</label>
                  <input
                    type="text"
                    name="tag"
                    className="input"
                    placeholder="Tag Title"
                  />
                  <label className="label">Tag Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Tag Name"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Add Tag</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTags;
