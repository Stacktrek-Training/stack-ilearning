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

      <div className="space-y-15 space-x-2 pt-0 grid grid-cols-3 gap-3 p-20">
        {/*SQL*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
  shadow-lg shadow-bottom bg-[#C1D0B5] border-transparent border-2 p-3 h-60 mt-14"
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
    shadow-lg shadow-bottom bg-[#FFF7D4] border-transparent border-2 p-3 h-60 mt-14"
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
    shadow-lg shadow-bottom bg-[#DDFFBB] border-transparent border-2 p-3 h-60 mt-14"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 3" className="text-black hover:text-blue-900">
              Concept 3
            </a>
          </h1>
        </div>


        {/*Concept 4*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
  shadow-lg shadow-bottom bg-[#57C5B6] border-transparent border-2 p-3 h-60 mt-5"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 4" className="text-black hover:text-blue-900">
              Concept 4
            </a>
          </h1>
        </div>

        {/*Concept 5*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
  shadow-lg shadow-bottom bg-[#BFACE2] border-transparent border-2 p-3 h-60 mt-5"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 5" className="text-black hover:text-blue-900">
              Concept 5
            </a>
          </h1>
        </div>

        {/*Concept 6*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
  shadow-lg shadow-bottom bg-[#FFFF9D] border-transparent border-2 p-3 h-60 mt-5"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 6" className="text-black hover:text-orange-500">
              Concept 6
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Proceed;
