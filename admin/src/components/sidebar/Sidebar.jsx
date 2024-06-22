import React from "react";
import { Link } from "react-router-dom";
import { cart, productList } from "../../constants/Images";

function Sidebar() {
  return (
    <div className="flex flex-col pt-7 gap-5 w-full max-w-[250px] h-screen bg-[#F7F8F7]">
      <Link to={"/addproduct"}>
        <div className="flex items-center justify-center my-5 rounded-md gap-5 py-3 px-1 ">
          <img src={cart} alt="logo" className="" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={"/listProduct"}>
        <div className="flex items-center justify-center my-5 rounded-md gap-5 py-3 px-1 ">
          <img src={productList} alt="logo" className="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
