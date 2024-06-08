import React, { useState } from "react";
import { Link } from "react-router-dom";
import {logo, cart} from '../../constants/Images'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Shop");
  const handleMenuClick = (menuItem) => setActiveMenu(menuItem);

  return (
    <div className="flex justify-around p-6 border shadow-md bg-[#F7F8F7] ">
      <div className="w-72">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex gap-14 items-center text-[#81b175] uppercase text-xl font-black">
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => handleMenuClick("Shop")}
        >
          {" "}
          <Link to="/">Shop</Link>{" "}
          {activeMenu === "Shop" && (
            <hr className="border w-4/5 h-1 bg-[#1A6837]" />
          )}{" "}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => handleMenuClick("Men")}
        >
          <Link to="/mens">Men</Link>{" "}
          {activeMenu === "Men" && (
            <hr className="border w-4/5 h-1 bg-[#1A6837]" />
          )}{" "}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => handleMenuClick("Women")}
        >
          <Link to="/womens">Women</Link>{" "}
          {activeMenu === "Women" && (
            <hr className="border w-4/5 h-1 bg-[#1A6837]" />
          )}{" "}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => handleMenuClick("Kids")}
        >
          <Link to="/kids">kid</Link>{" "}
          {activeMenu === "Kids" && (
            <hr className="border w-4/5 h-1 bg-[#1A6837]" />
          )}{" "}
        </li>
      </ul>
      <div className="flex gap-6 items-center">
        <Link to="/login">
          <button className="w-[157px] h-[60px] outline-none border border-[#1A6837] rounded-full text-[#2e8b57] font-bold text-xl bg-white cursor-pointer active:bg-[#7C9484] active:text-[#F7F8F7]">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="logo" />
        </Link>
        <div className="min-w-[22px] h-[22px] flex justify-center items-center -mt-6 -ml-10 bg-red-500 rounded-full p-1 text-white text-sm">
          1
        </div>
      </div>
    </div>
  );
};

export default Navbar;
