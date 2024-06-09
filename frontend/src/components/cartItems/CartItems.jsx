import React, { useContext } from "react";
import { ShopContext } from "./../../context/ShopContext";
import { Close } from "../../constants/Icons";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  let price = getTotalCartAmount();

  return (
    <div className="my-24 mx-40">
      <div className="grid grid-cols-6 items-center gap-20 p-5 text-base font-bold">
        <div className="text-center">Product</div>
        <div className="text-center">Title</div>
        <div className="text-center">Price</div>
        <div className="text-center">Quntity</div>
        <div className="text-center">Total</div>
        <div className="text-center">Remove</div>
      </div>
      <hr className="h-1 bg-gray-500" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="" key={e.id}>
              <div className="grid grid-cols-6 items-center gap-20 p-5 text-sm font-semibold">
                <div className="flex justify-center">
                  <img src={e.image} alt="" className="max-h-40" />
                </div>
                <p className=" text-center">{e.name}</p>
                <p className=" text-center">LKR {e.new_price}</p>
                <p className=" text-center">{cartItems[e.id]}</p>
                <p className=" text-center">
                  LKR {e.new_price * cartItems[e.id]}
                </p>
                <span
                  className="flex items-center justify-center  cursor-pointer"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                >
                  <Close />
                </span>
              </div>
              <hr className="h-[3px] bg-gray-400" />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-24">
        <div className="flex-1 flex flex-col mr-[200px] gap-10">
          <h1 className="font-bold text-xl">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-4">
              <p>Subtotal</p>
              <p>LKR {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-4">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-4 font-bold">
              <p>Total</p>
              <p>LKR {getTotalCartAmount()}</p>
            </div>
          </div>
          <button className="p-5 w-1/2 outline-none border-none bg-blue-500 text-lg uppercase font-bold text-white cursor-pointer">
            Proceed to checkout
          </button>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default CartItems;
