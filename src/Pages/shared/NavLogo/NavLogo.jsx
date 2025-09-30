import React from "react";
import logo from "./logo.png";
const NavLogo = () => {
  return (
    <div>
      <div className="flex space-x-3 bg-purple-200 p-2 rounded-sm">
        <img className="w-[34px] rounded-2xl" src={logo} />
        <p className="font-bold text-2xl text-emerald-500">Algo Forum</p>
      </div>
    </div>
  );
};

export default NavLogo;
