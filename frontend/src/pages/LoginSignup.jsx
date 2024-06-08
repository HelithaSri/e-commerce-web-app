import React from "react";

function LoginSignup() {
  return (
    <div className="w-full h-[80vh] pt-20">
      <div className="w-[580px] h-[600px] border shadow-lg m-auto py-10 px-14 rounded-3xl">
        <h1 className="my-5 font-bold text-3xl">Sign Up</h1>
        <div className="flex flex-col gap-7 mt-7">
          <input type="text" placeholder='Your Name' className="h-16 w-full pl-5 border border-gray-400 outline-none text-lg " />
          <input type="email" placeholder='Email' className="h-16 w-full pl-5 border border-gray-400 outline-none text-lg " />
          <input type="password" placeholder='Password' className="h-16 w-full pl-5 border border-gray-400 outline-none text-lg " />
        </div>
        <button className="w-full h-16 bg-blue-500 mt-7 text-xl font-bold uppercase text-white border-none cursor-pointer">Continue</button>
        <p className="mt-5 text-gray-500 font-medium text-sm">Already have an account? <span className="text-blue-500 font-semibold">Login here</span></p>
      </div>
    </div>
  );
}

export default LoginSignup;
