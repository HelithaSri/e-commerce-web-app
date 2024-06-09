import React,{useContext} from "react";
import { FilledStar, HalfFilledStar } from "./../../constants/Icons";
import { ShopContext } from './../../context/ShopContext';

function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="flex justify-center mx-40 ">
      <div className="flex flex-1 justify-end gap-5 justify-center ">
        <div className="flex flex-col gap-4 ">
          <img className="h-40" src={product.image} alt="" />
          <img className="h-40" src={product.image} alt="" />
          <img className="h-40" src={product.image} alt="" />
          <img className="h-40" src={product.image} alt="" />
        </div>
        <div className="">
          <img className="w-[580px] h-[690px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="flex flex-1 flex-col ml-10 ">
        <h1 className="font-bold text-4xl text-wrap">{product.name}</h1>
        <div className="flex items-center mt-3 gap-1 ">
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <HalfFilledStar />
          <p>250</p>
        </div>
        <div className="flex my-10 gap-8 text-2xl items-end">
            <div className="line-through text-gray-600 font-semibold">LKR {product.old_price}</div>
            <div className="text-red-500 text-3xl font-extrabold">LKR {product.new_price}</div>
        </div>
        <div className="text-pretty text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur sit nostrum quia quibusdam veritatis, error dicta eligendi maiores id numquam suscipit vitae repellat totam atque! Optio odio officiis eveniet.
            Atque,  provident eos explicabo earum voluptatem laudantium autem accusamus delectus similique labore. Deleniti hic molestias eligendi! Accusantium culpa perferendis sint?
         </div>
        <div className="">
            <h1 className="mt-14 text-xl font-semibold">Select Size</h1>
            <div className="flex gap-5 my-7">
                <div className="py-4 px-6 bg-slate-200 rounded-xl cursor-pointer font-semibold">S</div>
                <div className="py-4 px-6 bg-slate-200 rounded-xl cursor-pointer font-semibold">M</div>
                <div className="py-4 px-6 bg-slate-200 rounded-xl cursor-pointer font-semibold">L</div>
                <div className="py-4 px-6 bg-slate-200 rounded-xl cursor-pointer font-semibold">XL</div>
                <div className="py-4 px-6 bg-slate-200 rounded-xl cursor-pointer font-semibold">XXL</div>
            </div>
        </div>
        <button onClick={()=> {addToCart(product.id)}} className="py-5 px-10 text-base uppercase font-extrabold mb-1 outline-none cursor-pointer border-none w-52 rounded-md bg-blue-500 text-white">Add to cart</button>
{/*         <p className="font-bold">Tags : </p>
        <p className="font-bold">Category : </p> */}
      </div>
    </div>
  );
}

export default ProductDisplay;
