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
          className="h-50 w-50 object-contain mt-5 ml-6"
        />
        <img
          src={profile}
          alt="Profile"
          className="h-10 w-50 mt-5 mr-10 rounded-full border border-black"
        />
      </div>

      <hr className="border-3 border-black my-[-25px] mx-0 w-full" />

      {/*SQL*/}
      <div className="space-y-20 space-x-2 mt-40 pt-0 ml-20">
        <div
          className="text-white text-2xl font-serif font-bold ml-[120px] mt-[-50px] 
        inline-block rounded-3xl shadow-lg shadow-bottom w-[340px] h-[200px]
         bg-gradient-to-t from-[black] to-gray-400"
        >
          <h1 className="text-center mt-5 flex justify-center items-center h-full">
            <a href="/SQL" className="text-white mt-[-40px]">
              SQL
            </a>
          </h1>
        </div>

        {/*Concept 2*/}
        <div className="space-y-20 space-x-2 pt-0 ml-20">
          <div
            className="text-white text-2xl font-serif font-bold ml-[185px] absolute top-[153px] 
    left-[400px] inline-block rounded-3xl shadow-lg shadow-bottom w-[340px] h-[200px] 
    bg-gradient-to-t from-[black] to-gray-400"
          >
            <h1 className="text-center mt-5 flex justify-center items-center h-full">
              <a href="/Concept 2" className="text-white mt-[-40px]">
                Concept 2
              </a>
            </h1>
          </div>
        </div>

        {/*Concept 3*/}
        <div className="space-y-20 space-x-2 pt-0 ml-20">
          <div
            className="text-white text-2xl font-serif font-bold ml-[580px] absolute top-[153px] 
    left-[400px] inline-block rounded-3xl shadow-lg shadow-bottom w-[340px] h-[200px] 
    bg-gradient-to-t from-[black] to-gray-400"
          >
            <h1 className="text-center mt-5 flex justify-center items-center h-full">
              <a href="/Concept 3" className="text-white mt-[-40px]">
                Concept 3
              </a>
            </h1>
          </div>
        </div>

        {/*Concept 4*/}
        <div className="space-y-20 space-x-2 pt-0 ml-20">
          <div
            className="text-white text-2xl font-serif font-bold ml-[185px] absolute top-[400px] 
    left-[400px] inline-block rounded-3xl shadow-lg shadow-bottom w-[340px] h-[200px] 
    bg-gradient-to-t from-[black] to-gray-400"
          >
            <h1 className="text-center mt-5 flex justify-center items-center h-full">
              <a href="/Concept 4" className="text-white mt-[-40px]">
                Concept 4
              </a>
            </h1>
          </div>
        </div>

        {/*Concept 5*/}
        <div className="space-y-20 space-x-2 pt-0 ml-20">
          <div
            className="text-white text-2xl font-serif font-bold ml-[-205px] absolute top-[400px] 
    left-[400px] inline-block rounded-3xl shadow-lg shadow-bottom w-[340px] h-[200px] 
    bg-gradient-to-t from-[black] to-gray-400"
          >
            <h1 className="text-center mt-5 flex justify-center items-center h-full">
              <a href="/Concept 5" className="text-white mt-[-40px]">
                Concept 5
              </a>
            </h1>
          </div>
        </div>

        {/*Concept 6*/}
        <div className="space-y-20 space-x-2 pt-0 ml-20">
          <div
            className="text-white text-2xl font-serif font-bold ml-[580px] absolute top-[400px] 
    left-[400px] inline-block rounded-3xl shadow-lg shadow-bottom w-[340px] h-[200px] 
    bg-gradient-to-t from-[black] to-gray-400"
          >
            <h1 className="text-center mt-5 flex justify-center items-center h-full">
              <a href="/Concept 6" className="text-white mt-[-40px]">
                Concept 6
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proceed;
