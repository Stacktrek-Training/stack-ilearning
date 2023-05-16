import React, { useState } from "react";
import logo from "../assets/logo.png";

const SQL: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleConceptClick = (index: number) => {
    setActiveLink(index === activeLink ? null : index);
  };

  const renderDropdown = (index: number) => {
    if (index === activeLink) {
      let dropdownContent = "";
      switch (index) {
        case 0:
          dropdownContent =
            "SQL (Structured Query Language) is a programming language used for managing and manipulating relational databases. It provides a standardized way to interact with databases, allowing users to perform various operations such as retrieving, inserting, updating, and deleting data.";
          break;
        case 1:
          dropdownContent = "SQL Commands content";
          break;
        case 2:
          dropdownContent = "SQL Data Types content";
          break;
        case 3:
          dropdownContent = "SQL Functions content";
          break;
        case 4:
          dropdownContent = "SQL Operators content";
          break;
        default:
          dropdownContent = "";
          break;
      }
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white text-black p-10 rounded-lg shadow-md max-w-screen-lg w-11/12">
            <textarea
              className="h-40 w-full resize-none overflow-auto"
              value={dropdownContent}
              readOnly
            />
          </div>
        </div>
      );
    }
    return null;
  };

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
          <li className="text-2xl font-bold relative bg-gray-500 py-2 px-4 rounded-lg cursor-pointer">
            <div onClick={() => handleConceptClick(0)}>Introduction to SQL</div>
            {renderDropdown(0)}
          </li>
          <li className="text-2xl font-bold relative bg-gray-500 py-2 px-4 rounded-lg cursor-pointer">
            <div onClick={() => handleConceptClick(1)}>SQL Commands</div>
            {renderDropdown(1)}
          </li>
          <li className="text-2xl font-bold relative bg-gray-500 py-2 px-4 rounded-lg cursor-pointer">
            <div onClick={() => handleConceptClick(2)}>SQL Data Types</div>
            {renderDropdown(2)}
          </li>
          <li className="text-2xl font-bold relative bg-gray-500 py-2 px-4 rounded-lg cursor-pointer">
            <div onClick={() => handleConceptClick(3)}>SQL Functions</div>
            {renderDropdown(3)}
          </li>
          <li className="text-2xl font-bold relative bg-gray-500 py-2 px-4 rounded-lg cursor-pointer">
            <div onClick={() => handleConceptClick(4)}>SQL Operators</div>
            {renderDropdown(4)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SQL;
