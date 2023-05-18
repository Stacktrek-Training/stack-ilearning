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

      <div className="space-y-20 space-x-2 mt-15 pt-0 ml-[-10] grid grid-cols-3 gap-3 p-20">
        {/*SQL*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
  shadow-lg shadow-bottom bg-white border-transparent border-2 p-3 h-48 mt-20"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/SQL" className="text-black">
              SQL
            </a>
          </h1>
        </div>

        {/*Concept 2*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
    shadow-lg shadow-bottom bg-white border-transparent border-2 p-3 h-48"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 2" className="text-black">
              Concept 2
            </a>
          </h1>
        </div>

        {/*Concept 3*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
    shadow-lg shadow-bottom bg-white border-transparent border-2 p-3 h-48"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 3" className="text-black">
              Concept 3
            </a>
          </h1>
        </div>

        {/*Concept 4*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
    shadow-lg shadow-bottom bg-white border-transparent border-2 p-3 h-48"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 4" className="text-black">
              Concept 4
            </a>
          </h1>
        </div>

        {/*Concept 5*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
    shadow-lg shadow-bottom bg-white border-transparent border-2 p-3 h-48"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 5" className="text-black">
              Concept 5
            </a>
          </h1>
        </div>

        {/*Concept 6*/}
        <div
          className="text-white text-2xl font-serif font-bold inline-block rounded-3xl 
    shadow-lg shadow-bottom bg-white border-transparent border-2 p-3 h-48"
        >
          <h1 className="text-center flex justify-center items-center h-full">
            <a href="/Concept 6" className="text-black">
              Concept 6
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Proceed;
