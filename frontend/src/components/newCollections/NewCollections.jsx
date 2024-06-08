import React from "react";
import populer_data from "../../assets/data/data.js";
import new_product from "./../../assets/data/new_collections";
import Item from "./../item/Item";

function NewCollections() {
  return (
    <div className="flex flex-col items-center gap-5 h-fit pb-10">
      <div className="flex flex-col justify-center items-center pt-6">
        <div className="text-6xl uppercase font-bold">New Collections</div>
        <hr className="w-96 h-2 bg-black rounded-full" />
      </div>
      <div className="grid grid-cols-4 mt-12 gap-7">
        {new_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}

export default NewCollections;
