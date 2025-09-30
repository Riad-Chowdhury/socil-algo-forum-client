import React from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../Pages/shared/Logo/Logo";
import NavLogo from "../Pages/shared/NavLogo/NavLogo";

// import Lottie from "react-lottie";
const AuthLayout = () => {
  return (
    <div className="">
      <NavLink to={"/"}>
        <NavLogo></NavLogo>
      </NavLink>
      <div className="flex justify-center items-center">
        <div className="">
          <Outlet></Outlet>
        </div>
        <div className="">
          <Logo></Logo>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
