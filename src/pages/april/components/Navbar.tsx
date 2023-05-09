import React from "react";
import logo from "../assets/logo.png";
import edited from "../assets/edited.png";
import postgresql from "../assets/postgresql.png";
import mysql from "../assets/mysql.png";
import mssql from "../assets/mssql.png";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
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

      {/* buttons */}
      <div className="flex justify-end items-center absolute top-5 right-5 font-sans">
        <button className="text-black text-lg font-extrabold uppercase mr-4 inline-flex items-center">
          <FaHome size={25} className="mr-2 text-black" />
          <span className="mt-2"></span>
        </button>
        <button className="text-black text-lg font-extrabold uppercase mr-4 inline-flex items-center">
          <FaUserCircle size={25} className="mr-2 text-black" />
          <span className="mt-2"></span>
        </button>
      </div>

      {/*Header*/}
      <h1 className="text-5xl pl-10 ml-20 mt-10 pt-10 font-extralight">
        Your future career starts here!
      </h1>

      <h1 className="text-3xl pl-10 ml-20 mt-5 pt-5 font-extralight">
        The ideal standard language to learn how<br></br> to manage all your
        data.
      </h1>

      <h1
        className="text-3xl text-orange-500 uppercase pr-4 ml-28 pl-5 mt-20 pt-3 rounded-full font-serif font-bold
       bg-black border border-white inline-flex py-3 px-6 shadow-lg shadow-bottom"
      >
        Structured Query Language
      </h1>

      <div className="absolute top-20 right-20 mt-10 mr-10">
        <img src={edited} alt="edited" className="w-96 h-96 object-cover"></img>
      </div>

      {/*SQL*/}
      <div className="space-y-20 space-x-2 mt-40 pt-0 ml-10">
        <div
          className="text-white text-2xl font-serif font-bold ml-20 bg-black
        inline-block rounded-lg shadow-lg shadow-bottom w-[280px] h-[140px]"
        >
          <h1 className="text-center mt-5">
            <Link to="/intro" className="underline text-orange-500">
              Introduction to SQL
            </Link>
            <p className="text-sm px-4 py-2 font-mono font-medium">
              SQL (Structured Query Language)
              <br></br> is a programming language used<br></br>to manage and
              manipulate relational databases.
            </p>
          </h1>
        </div>

        {/*Data Types*/}

        <div
          className="text-white text-2xl font-serif font-bold ml-20 
         bg-black inline-block rounded-lg shadow-lg shadow-bottom"
        >
          <h1 className="text-center mt-5">
            <Link to="/datatypes" className="underline text-orange-500 mt-20">
              SQL Data Types
            </Link>
            <p className="text-sm px-4 py-2 font-mono font-medium">
              Specify the type of data that can<br></br>be stored in a database
              <br></br>table column and the kind of values<br></br>
              that the column can hold.
            </p>
          </h1>
        </div>

        {/*Commands*/}
        <div
          className="text-white text-2xl font-serif font-bold ml-20 mt-0 pt-0 pb-0 pl-0 pr-0
         bg-black inline-block rounded-lg shadow-lg shadow-bottom"
        >
          <h1 className="text-center mt-5">
            <Link to="/commands" className="underline text-orange-500 mt-20">
              SQL Commands
            </Link>
            <p className="text-sm px-4 py-2 font-mono font-medium">
              Used to interact with a database,<br></br> such as querying data,
              <br></br>modifying data, or creating and<br></br>
              altering database objects.
            </p>
          </h1>
        </div>

        {/*Keywords*/}

        <div
          className="text-white text-2xl font-serif font-bold ml-20 mt-0 pt-0 pb-0 pl-0 pr-0
         bg-black inline-block rounded-lg shadow-lg shadow-bottom"
        >
          <h1 className="text-center mt-5">
            <Link to="/keywords" className="underline text-orange-500 mt-20">
              SQL Keywords
            </Link>
            <p className="text-sm px-4 py-2 font-mono font-medium">
              SQL keywords are reserved words<br></br>in the SQL language.
              <br></br>They are used to specify various<br></br> actions in SQL
              statements.
            </p>
          </h1>
        </div>
      </div>

      {/*Functions*/}
      <div className="space-y-5 space-x-2 mt-0 pt-0 ml-10">
        <div
          className="text-white text-2xl font-serif font-bold ml-20 mt-0 pt-0 pb-0 pl-0 pr-0
         bg-black inline-block rounded-lg shadow-lg shadow-bottom"
        >
          <h1 className="text-center mt-5">
            <Link to="/functions" className="underline text-orange-500 mt-20">
              SQL Functions
            </Link>
            <p className="text-sm px-4 py-2 font-mono font-medium">
              built-in or user-defined<br></br>operations that perform a
              <br></br>
              specific task on the data stored<br></br>in a database.
            </p>
          </h1>
        </div>

        {/*Operators*/}

        <div
          className="text-white text-2xl font-serif font-bold ml-0 mt-0 pt-0 pb-0 pl-0 pr-1.5
         bg-black inline-block rounded-lg shadow-lg shadow-bottom"
        >
          <h1 className="text-center mt-5">
            <Link to="/operators" className="underline text-orange-500 mt-20">
              SQL Operators
            </Link>
            <p className="text-sm px-4 py-2 font-mono font-medium">
              SQL operators are symbols<br></br>or keywords used in SQL
              statements
              <br></br>
              to perform various<br></br>operations on data.
            </p>
          </h1>
        </div>

        <div className="flex flex-row justify-center items-center mt-20">
          <div className="flex flex-row items-center mt-20">
            <img
              src={postgresql}
              alt="postgresql"
              className="w-80 h-80 object-cover"
            ></img>
            <img
              src={mysql}
              alt="mysql"
              className="w-80 h-80 ml-10 object-cover"
            ></img>
            <img
              src={mssql}
              alt="mssql"
              className="w-80 h-80 ml-10 object-cover"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
