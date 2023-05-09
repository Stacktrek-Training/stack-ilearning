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
    </div>
  );
};

export default Proceed;
