import React from "react";
import populer_data from "../../assets/data/data.js";
import data_product from "./../../assets/data/data";
import Item from "./../item/Item";

function Populer() {
  return (
    <div className="flex flex-col items-center gap-5 h-[90vh] ">
      <div className="flex flex-col justify-center items-center pt-6">
        <div className="text-6xl uppercase font-bold">Populer</div>
        <hr className="w-52 h-2 bg-black rounded-full" />
      </div>
      <div className="flex gap-3 mt-12">
        {data_product.map((item, i) => {
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

export default Populer;
