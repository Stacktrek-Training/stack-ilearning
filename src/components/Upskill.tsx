import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/John Michael Lagrana.png";

const Proceed = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="Logo"
          className="h-50 w-50 object-contain mt-3 ml-6"
        />
        <img
          src={profile}
          alt="Profile"
          className="h-10 w-50 mt-5 mr-10 rounded-full border border-black"
        />
      </div>

      <hr className="border-3 border-black my-3 mx-15" />

      {/*SQL*/}
      <div className="space-y-20 space-x-2 mt-40 pt-0 ml-10">
        <div
          className="text-white text-2xl font-serif font-bold ml-20 mt-[-100px] 
        inline-block rounded-3xl shadow-lg shadow-bottom w-[340px] h-[200px]
         bg-gradient-to-t from-[#FFA500] via-orange-200 to-blue-400"
        >
          <h1 className="text-center mt-5 flex justify-center items-center h-full">
            <a href="/sql" className="text-white">
              SQL
            </a>
          </h1>
        </div>

        {/*Concept 2*/}
        <div className="space-y-20 space-x-2 pt-0 ml-20">
          <div
            className="text-white text-2xl font-serif font-bold ml-[105px] absolute top-[120px] 
    left-[400px] inline-block rounded-3xl shadow-lg shadow-bottom w-[340px] h-[200px] 
    bg-gradient-to-t from-[#FFA500] via-orange-200 to-blue-400"
          >
            <h1 className="text-center mt-5 flex justify-center items-center h-full">
              <a href="/sql" className="text-white">
              </a>
            </h1>
          </div>
        </div>

        {/*Concept 3*/}
        <div className="space-y-20 space-x-2 pt-0 ml-20">
          <div
            className="text-white text-2xl font-serif font-bold ml-[500px] absolute top-[120px] 
    left-[400px] inline-block rounded-3xl shadow-lg shadow-bottom w-[340px] h-[200px] 
    bg-gradient-to-t from-[#FFA500] via-orange-200 to-blue-400"
          >
            <h1 className="text-center mt-5 flex justify-center items-center h-full">
              <a href="/sql" className="text-white">
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proceed;
