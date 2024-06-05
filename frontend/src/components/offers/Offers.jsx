import React from "react";
import OfferImage from "../../assets/images/offers.png";

function Offers() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[65%] h-[60vh] flex px-36 mb-36 bg-gradient-to-r from-green-300 to-cyan-300">
        <div className="flex flex-1 flex-col justify-center gap-3">
          <h1 className="text-8xl font-bold">Exclusive</h1>
          <h1 className="text-2xl font-bold">Offers For You</h1>
          <p className="text-slate-800 uppercase font-bold">
            Only on best seller products
          </p>
          <button className="border-none text-white text-2xl font-bold cursor-pointer w-[282px] h-[70px] rounded-full bg-red-400">
            Check Now
          </button>
        </div>
        <div className="flex flex-1 justify-center items-end pl-24">
          <img src={OfferImage} alt="hero_image" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Offers;
