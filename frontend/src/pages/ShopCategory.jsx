import React, { useContext } from "react";
import { ShopContext } from "./../context/ShopContext";
import all_product from "./../assets/data/all_product";
import Item from "./../components/item/Item";
import { DownArrow } from "./../constants/Icons";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt="" className="block my-7 mx-auto w-4/5" />
      <div className="flex justify-between items-center my-0 mx-48 ">
        <p>
          <span className="font-semibold">Showing 1-12</span>&nbsp;out of 36
          products
        </p>
        <div className="py-3 px-8 flex justify-between items-center border rounded-3xl">
          Sort by
          <span className="inline-flex">
            <DownArrow />
          </span>
        </div>
      </div>
      <div className="my-5 mx-48 grid grid-cols-4  gap-20">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                img={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center my-20 border-none text-lg mx-auto w-60 h-20 rounded-full text-gray-900 font-bold bg-blue-300">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
