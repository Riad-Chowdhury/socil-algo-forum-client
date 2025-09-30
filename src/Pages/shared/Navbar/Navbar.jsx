import React from "react";
import { NavLink } from "react-router";
import logo from "../../../assets/logo.png";
import useAuth from "../../../hooks/useAuth";
import { IoNotifications } from "react-icons/io5";
import Swal from "sweetalert2";
import Announcement from "../../Home/Announcement/Announcement";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    console.log(user);
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const lick = (
    <>
      <NavLink to={"/"}>home</NavLink>

      <NavLink to={"/about"}>abbb</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3.5"
            >
              {lick}
            </ul>
          </div>
          <div className="flex space-x-3 bg-purple-200 p-2 rounded-sm">
            <img className="w-[34px] rounded-2xl" src={logo} alt="" />
            <p className="font-bold text-2xl text-emerald-500">Algo Forum</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{lick}</ul>
        </div>
        {/* Dropdown menu */}

        <div className="navbar-end space-x-2.5">
          <Announcement></Announcement>
          <div className="dropdown bg-amber-200 dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              Click
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li></li>
              <li>
                {user ? (
                  <button onClick={handleLogOut} className="btn">
                    LogOut
                  </button>
                ) : (
                  <NavLink to={"/login"}>
                    <button className="btn">Login</button>
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
