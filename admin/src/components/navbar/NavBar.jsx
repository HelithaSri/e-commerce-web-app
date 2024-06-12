import React from "react";
import { Link } from "react-router-dom";
import { logo, user } from "../../constants/Images";
import { ProductCart } from "../../constants/Icons";

function NavBar() {
  return (
    <div className="flex items-center justify-between py-4 px-16 shadow-md mb-1 bg-[#F7F8F7]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-72" />
      </Link>
      <Link to="/">
        <img src={user} alt="logo" className="w-16" />{" "}
      </Link>
    </div>
  );
}

export default NavBar;
