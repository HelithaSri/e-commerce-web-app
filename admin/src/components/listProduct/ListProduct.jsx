import React, { useState, useEffect } from "react";
import { Close, Edit } from "../../constants/Icons";
import { fetchProductsInfo } from "../../services/ApiService";

function ListProduct() {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    let products = await fetchProductsInfo();
    setAllProducts(products.products);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeFromCart = (productId) => {
    // setCartItems((prevCartItems) => {
    //   const updatedCartItems = { ...prevCartItems };
    //   delete updatedCartItems[productId];
    //   return updatedCartItems;
    // });
  };

  return (
    <div className="flex h-fit flex-col gap-5 w-full py-8 px-12 my-5 mx-8 rounded-md bg-[#F7F8F7] box-border ">
      <div className="grid grid-cols-6 items-center gap-20 p-5 text-base font-bold">
        <div className="text-center">Product</div>
        <div className="text-center">Title</div>
        <div className="text-center">Old Price</div>
        <div className="text-center">New Price</div>
        <div className="text-center">Category</div>
        <div className="text-center">Action</div>
      </div>
      <hr className="h-1 bg-gray-500" />
      <div className="overflow-y-auto h-screen">
        {allProducts.map((e) => {
          return (
            <div className="" key={e.id}>
              <div className="grid grid-cols-6 items-center gap-20 p-5 text-sm font-semibold">
                <div className="flex justify-center">
                  <img src={e.image} alt="" className="max-h-40" />
                </div>
                <p className="text-center">{e.name}</p>
                <p className="text-center">LKR {e.old_price}</p>
                <p className="text-center">LKR {e.new_price}</p>
                <p className="text-center">{e.category}</p>
                <span
                  className="flex gap-3  w-full h-full items-center justify-evenly "
                  onClick={() => removeFromCart(e.id)}
                >
                  <div className="h-2 cursor-pointer">
                    <Edit />
                  </div>
                  <div className="h-2 cursor-pointer">
                    <Close />
                  </div>
                </span>
              </div>
              <hr className="h-[3px] bg-gray-400" />
            </div>
          );

          return null;
        })}
      </div>
    </div>
  );
}

export default ListProduct;
