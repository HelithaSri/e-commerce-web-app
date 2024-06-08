import React from "react";
import { logo } from './../../constants/Images';


function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 py-10 shadow-md bg-[#F7F8F7]">
      <div className="flex items-center gap-5 justify-center">
        <img src={logo} alt="" width="50%" />
      </div>
      <ul className="flex list-none style gap-12 text-xl text-[#81b175]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex flex-col justify-center items-center">
        <hr />
        <p className="text-[#81b175]">Copyright @ 2024 - All Right Reserved </p>
      </div>
    </div>
  );
}

export default Footer;
