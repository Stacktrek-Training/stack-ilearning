import React from "react";
import logo from "../assets/logo.png";

function Commands() {
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
    </div>
  );
}

export default Commands;
