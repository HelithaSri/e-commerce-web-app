import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="">
      <Link to={"/addproduct"}>
        <div></div>
      </Link>
    </div>
  );
}

export default Sidebar;
