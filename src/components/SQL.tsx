import React from "react";
import logo from "../assets/logo.png";

const SQL = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-500 h-screen w-screen">
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="Logo"
          className="h-50 w-50 object-contain mt-5 ml-6"
        />
      </div>

      <hr className="border-3 border-black my-[-25px] mx-0 w-full" />

      {/*Top Navigation Bar*/}
      <div className="bg-gray-800 text-white p-4 mt-5">
        {/*Navigation links*/}
        <ul className="flex space-x-4 ml-5">
          <li
            className="text-2xl font-bold hover:text-blue-400 hover:cursor-pointer
           bg-gray-500 py-2 px-4 rounded-lg"
          >
            Introduction to SQL
          </li>
          <li
            className="text-2xl font-bold hover:text-blue-400 hover:cursor-pointer
           bg-gray-500 py-2 px-4 rounded-lg"
          >
            SQL Commands
          </li>
          <li
            className="text-2xl font-bold hover:text-blue-400 hover:cursor-pointer
           bg-gray-500 py-2 px-4 rounded-lg"
          >
            SQL Data Types
          </li>
          <li
            className="text-2xl font-bold hover:text-blue-400 hover:cursor-pointer
           bg-gray-500 py-2 px-4 rounded-lg"
          >
            SQL Functions
          </li>
          <li
            className="text-2xl font-bold hover:text-blue-400 hover:cursor-pointer
           bg-gray-500 py-2 px-4 rounded-lg"
          >
            Operators
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SQL;
