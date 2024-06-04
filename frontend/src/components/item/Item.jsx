import React from "react";

const Item = (props) => {
  return (
    <div className="w-80 hover:scale-105 hover:ease-in hover:duration-300">
      <img
        src={props.img}
        alt=""
        className="object-cover h-[380px] w-full grow basis-3/4 overflow-hidden"
      />
      <div className="grow basis-1/4">
        <p className="my-2 font-semibold text-center">{props.name}</p>
        <div className="flex gap-2 items-center justify-center">
          <div className="text-black font-bold text-lg">
            LKR {props.new_price}
          </div>
          <div className="text-blue-300 font-bold text-sm line-through">
            LKR {props.old_price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
