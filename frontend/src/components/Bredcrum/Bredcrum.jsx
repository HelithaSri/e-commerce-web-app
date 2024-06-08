import React from "react";
import { RightArrow } from "../../constants/Icons";

function Bredcrum(props) {
  const { product } = props;
  return (
    <div className="flex items-center gap-2 text-xs font-semibold my-10 mx-44 capitalize text-gray-800">
      Home <RightArrow /> Shop <RightArrow /> {product.category} <RightArrow /> {product.name}
    </div>
  );
}

export default Bredcrum;
