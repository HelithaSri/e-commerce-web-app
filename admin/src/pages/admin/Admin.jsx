import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../components/addProduct/AddProduct";
import ListProduct from "../../components/listProduct/ListProduct";

function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/listProduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
}

export default Admin;
