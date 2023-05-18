import React from "react";
import Navbar from "./../../components/Navigationbar";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <center>
          <h1 className="pt-12 font-sons text-5xl font-bold text-orange-400">
            Basics of C#
          </h1>
        </center>
        <p className="p-12 font-sans font-medium leading-loose tracking-normal ">
          C# (pronounced "See Sharp") is a modern, object-oriented, and
          type-safe programming language. C# enables developers to build many
          types of secure and robust applications that run in .NET. C# has its
          roots in the C family of languages and will be immediately familiar to
          C, C++, Java, and JavaScript programmers. If you want to explore the
          language through interactive examples, try the introduction to{" "}
          <a
            className="text-blue-600"
            href="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/"
          >
            C# tutorials
          </a>
          .
          <br />
          <br />
          C# is an object-oriented,<i> component-oriented </i> programming
          language. C# provides language constructs to directly support these
          concepts, making C# a natural language in which to create and use
          software components. Since its origin, C# has added features to
          support new workloads and emerging software design practices. At its
          core, C# is an <i className="font-bold">object-oriented </i> language.
          You define types and their behavior.
          <br />
          <br />
          Several C# features help create robust and durable applications.
          Garbage collection automatically reclaims memory occupied by
          unreachable unused objects. Nullable types guard against variables
          that don't refer to allocated objects. Exception handling provides a
          structured and extensible approach to error detection and recovery.
          Lambda expressions support functional programming techniques. Language
          Integrated Query (LINQ) syntax creates a common pattern for working
          with data from any source. Language support for asynchronous
          operations provides syntax for building distributed systems. C# has a
          unified type system. All C# types, including primitive types such as
          int and double, inherit from a single root object type. All types
          share a set of common operations. Values of any type can be stored,
          transported, and operated upon in a consistent manner. Furthermore, C#
          supports both user-defined reference types and value types. C# allows
          dynamic allocation of objects and in-line storage of lightweight
          structures. C# supports generic methods and types, which provide
          increased type safety and performance. C# provides iterators, which
          enable implementers of collection classes to define custom behaviors
          for client code.
          <br />
          <br />
          C# emphasizes versioning to ensure programs and libraries can evolve
          over time in a compatible manner. Aspects of C#'s design that were
          directly influenced by versioning considerations include the separate
          virtual and override modifiers, the rules for method overload
          resolution, and support for explicit interface member declarations.
          <br />
          <br />
          <br />
        </p>
        <div className="pb-8 ">
          <center>
            <Link to="/games/CsharpQuiz1">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4
             focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-block w-auto h-auto mx-auto"
              >
                Take a quiz!
              </button>
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
