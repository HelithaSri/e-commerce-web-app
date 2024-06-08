import React, { useContext } from "react";
import { ShopContext } from "./../context/ShopContext";
import { useParams } from "react-router-dom";
import { DownArrow } from "./../constants/Icons";
import Bredcrum from "./../components/Bredcrum/Bredcrum";
import ProductDisplay from './../components/productDisplay/ProductDisplay';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Bredcrum product={product} />
      <ProductDisplay product={product}/>
    </div>
  );
}

export default Product;
