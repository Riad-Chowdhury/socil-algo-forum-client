import React from "react";
import { Outlet } from "react-router";
import Logo from "../Pages/shared/Logo/Logo";

// import Lottie from "react-lottie";
const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default AuthLayout;
