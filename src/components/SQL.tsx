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
    </div>
  );
};

export default SQL;
