import React from 'react'
import data_product from "../../assets/data/data.js";
import Item from "./../item/Item";

function RelatedProducts() {
    return (
        <div className="flex flex-col items-center gap-5 h-fit mt-10 pb-10">
          <div className="flex flex-col justify-center items-center pt-6">
            <div className="text-6xl uppercase font-bold">Related Products</div>
            <hr className="w-96 h-2 bg-black rounded-full" />
          </div>
          <div className="grid grid-cols-4 mt-12 gap-20">
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

export default RelatedProducts