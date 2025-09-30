import React from "react";
import errors from "./error.jpg";
import { NavLink } from "react-router";
const Error = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <img className="w-2xl shadow-2xl h-96" src={errors} alt="" />
        <NavLink to={"/"}>
          {" "}
          <button className="btn mt-10">Go Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
