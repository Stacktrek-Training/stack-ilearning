import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/John Michael Lagrana.png";

const Proceed = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-500 h-screen w-screen">
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="Logo"
          className="h-50 w-50 object-contain mt-4 ml-6"
        />
        <img
          src={profile}
          alt="Profile"
          className="h-10 w-50 mt-4 mr-10 rounded-full border border-black"
        />
      </div>

      <hr className="border-3 border-black my-[10px] mx-0 w-full" />

      <div className="space-y-15 space-x-2 pt-[-35px] grid grid-cols-3 gap-3 p-20 items-center justify-center">
        {/*SQL*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
  shadow-lg shadow-bottom bg-[#FFFFE8] border-transparent border-2 p-3 h-60 mt-14"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/SQL" className="text-black hover:text-blue-900">
              SQL
            </a>
          </h1>
        </div>

        {/*Concept 2*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
    shadow-lg shadow-bottom bg-[#FFFFE8] border-transparent border-2 p-3 h-60 mt-14"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 2" className="text-black hover:text-blue-900">
              Concept 2
            </a>
          </h1>
        </div>

        {/*Concept 3*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
    shadow-lg shadow-bottom bg-[#FFFFE8] border-transparent border-2 p-3 h-60 mt-14"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 3" className="text-black hover:text-blue-900">
              Concept 3
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Proceed;
