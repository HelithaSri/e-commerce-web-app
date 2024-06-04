import React from 'react'
import HeroImage from '../../assets/images/hero.png'
import { isDeferredData } from './../../../node_modules/@remix-run/router/router';

const Hero = () => {
  return (
    <div className="flex h-screen m-1 bg-green-300">
      <div className="flex justify-center items-end flex-1 pl-24">
        <img src={HeroImage} alt="hero_image" width="100%"/>
      </div>
      <div className="flex flex-col gap-14 justify-center items-end pr-40 flex-1">
        <div className="flex flex-col items-end">
        <h1 className="uppercase font-bold text-4xl">New Arrivals</h1>
        <p className="whitespace-pre-line text-9xl font-extrabold uppercase text-right">
        Just For &#10;&#13;
        You
        </p>
        </div>
        <div className="flex justify-center items-end w-full">
          <div className=" flex justify-end items-center w-full">
          <div className="bg-green-800 text-white text-3xl font-medium p-6 rounded-lg cursor-pointer active:bg-slate-700">
            Shop Now
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
// 200025101628 0767059199
export default Hero