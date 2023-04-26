import React, { useState } from "react";
import logo from "../components/logo.png";
import { FaHome, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`bg-gradient-to-b ${
        darkMode ? "from-gray-900 to-gray-800" : "from-white to-blue-500"
      } h-screen w-screen`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-50 w-50 object-contain mt-6 ml-6"
        />
      </div>

      <hr
        className={`border-3 ${
          darkMode ? "border-white" : "border-black"
        } my-4 mx-15 `}
      />

      {/* buttons */}
      <div className="flex justify-end items-center absolute top-5 right-5 font-sans">
        <button
          className="text-black text-lg font-extrabold uppercase mr-4 inline-flex items-center"
          onClick={handleDarkModeToggle}
        >
          {darkMode ? (
            <FaSun size={25} className="mr-2 text-white" />
          ) : (
            <FaMoon size={22} className="mr-2" />
          )}
          <span className="mt-2"></span>
        </button>
        <button className="text-black text-lg font-extrabold uppercase mr-4 inline-flex items-center">
          <FaHome
            size={25}
            className={`mr-2 ${darkMode ? "text-white" : "text-black"}`}
          />
          <span className="mt-2"></span>
        </button>
        <button className="text-black text-lg font-extrabold uppercase mr-4 inline-flex items-center">
          <FaUserCircle
            size={25}
            className={`mr-2 ${darkMode ? "text-white" : "text-black"}`}
          />

          <span className="mt-2"></span>
        </button>
      </div>

      {/*Header*/}
      <div
        className={`ml-20 mt-10 text-transparent bg-gradient-to-r from-white-500 to-black-300 bg-clip-text ${
          darkMode ? "text-white dark:text-white" : "text-black"
        }`}
      >
        <h1
          className={`bg-gradient-to-r from-white to-black font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text ${
            darkMode ? "text-white dark:text-white" : "text-black"
          }`}
        >
          Structured Query Language
        </h1>
      </div>

      {/*SQL*/}
      <div className="space-y-20 space-x-2 mt-0 pt-10 ml-0">
        <div
          class="text-black text-2xl font-serif font-bold ml-20 bg-white border
       border-black inline-block rounded-lg shadow-lg shadow-bottom w-[280px] h-[140px]"
        >
          <h1 class="text-center mt-5">
            <Link to="/intro" className="underline text-orange-500">
              Introduction to SQL
            </Link>
            <p class="text-sm px-4 py-2 font-mono font-medium">
              SQL (Structured Query Language)
              <br></br> is a programming language used<br></br>to manage and
              manipulate relational databases.
            </p>
          </h1>
        </div>

        {/*Data Types*/}
        <div
          class="text-black text-2xl font-sans font-bold ml-20 mt-0 pt-0 pb-0 pl-0 pr-0
         bg-white border border-black inline-block rounded-lg shadow-lg shadow-bottom"
        >
          <h1 class="text-center mt-5">
            <Link to="/datatypes" className="underline text-orange-500 mt-20">
              SQL Data Types
            </Link>
            <p class="text-sm px-4 py-2 font-mono font-medium">
              Specify the type of data that can<br></br>be stored in a database
              <br></br>table column and the kind of values<br></br>
              that the column can hold.
            </p>
          </h1>
        </div>

        {/*Commands*/}

        <div
          class="text-black text-2xl font-sans font-bold ml-20 mt-0 pt-0 pb-0 pl-0 pr-0
         bg-white border border-black inline-block rounded-lg shadow-lg shadow-bottom"
        >
          <h1 class="text-center mt-5">
            <Link to="/commands" className="underline text-orange-500 mt-20">
              SQL Commands
            </Link>
            <p class="text-sm px-4 py-2 font-mono font-medium">
              SQL commandsare used to interact<br></br>with a database, such as
              querying data,<br></br>modifying data, or creating and<br></br>
              altering database objects.
            </p>
          </h1>
        </div>

        {/*Keywords*/}

        <div
          class="text-black text-2xl font-sans font-bold ml-20 mt-0 pt-0 pb-0 pl-5 pr-5
         bg-white border border-black inline-block rounded-lg shadow-lg shadow-bottom"
        >
          <h1 class="text-center mt-5">
            <Link to="/keywords" className="underline text-orange-500 mt-20">
              SQL Keywords
            </Link>
            <p class="text-sm px-4 py-2 font-mono font-medium">
              SQL keywords are reserved words<br></br>in the SQL language.
              <br></br>They are used to specify various<br></br> actions in SQL
              statements.
            </p>
          </h1>
        </div>
      </div>

      {/*Functions*/}

      <div
        class="text-black text-2xl font-sans font-bold ml-20 mt-10 pt-0 pb-0 pl-0 pr-0
         bg-white border border-black inline-block rounded-lg shadow-lg shadow-bottom"
      >
        <h1 class="text-center mt-5">
          <Link to="/functions" className="underline text-orange-500 mt-20">
            SQL Functions
          </Link>
          <p class="text-sm px-4 py-2 font-mono font-medium">
            built-in or user-defined<br></br>operations that perform a specific
            <br></br>task on the data stored<br></br>in a database.
          </p>
        </h1>
      </div>

      {/*Operators*/}

      <div
        class="text-black text-2xl font-sans font-bold ml-3 mt-0 pt-0 pb-0 pl-0 pr-0
         bg-white border border-black inline-block rounded-lg shadow-lg shadow-bottom"
      >
        <h1 class="text-center mt-5">
          <Link to="/operators" className="underline text-orange-500 mt-20">
            SQL Operators
          </Link>
          <p class="text-sm px-4 py-2 font-mono font-medium">
            SQL operators are symbols<br></br>or keywords used in SQL statements
            <br></br>
            to perform various<br></br>operations on data.
          </p>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
