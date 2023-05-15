import React from "react";
import logo from "../assets/logo.png";
import query from "../assets/query.png";

function Intro() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-500 h-screen w-screen">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-50 w-50 object-contain mt-6 ml-6"
        />
      </div>
      <hr className="border-3 border-black my-4 mx-15" />
      <div className="flex-center"></div>

      <div className="absolute top-5 right-0 mt-10 mr-100">
        <img src={query} alt="query" className="w-128 h-96 object-contain" />
      </div>

      <div className="text-black font-mono font-bold text-xl">
        <h1 className="mt-20 ml-20">
          SQL is a standard language for accessing and manipulating databases.
          <br></br>
          It is a standard language used for interacting with databases,
          <br></br>
          and it is supported by most relational database management systems
          (RDBMS).<br></br>
          SQL is used to create, modify, and retrieve data from databases.
        </h1>
      </div>
    </div>
  );
}

export default Intro;
