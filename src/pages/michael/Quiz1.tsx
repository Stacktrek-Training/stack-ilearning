import React from "react";
import Navigationbar from "../../components/Navigationbar";

const Quiz1 = () => {
  return (
    <div>
      <Navigationbar />
      <center>
      <div className="pt-20 w-5/6 ">
        <a
          href="#"
          className=" w-5/6 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.  Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
      </center>
    </div>
  );
};

export default Quiz1;
