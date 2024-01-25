import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function ReportNav() {

  return (
    <>
      <div className="w-72">
        <div className="flex bg-black w-44">
          <div className="px-4 py-2 relative bottom-2 right-2 bg-yellow-400 text-white font-bangers text-2xl rounded-r-full">
            Rx
          </div>
          <div className="px-6 py-2 text-white font-bangers text-xl rounded-r-full">
            REPORT
          </div>
        </div>
        <div className="mt-1">
          <p className="text-xs font-semibold">
            A contextualized report for your challenges
          </p>
        </div>

        <div className="flex gap-3 mt-5 w-full shadow-md shadow-gray-300 border-2 hover:border-yellow-500">
          <div className="px-4 py-2 bg-yellow-400 text-white font-bangers text-2xl rounded-r-full">
            <CheckCircleOutlineIcon />
          </div>
          <button className="w-full text-sm font-semibold flex items-center">
            1.About You
          </button>
        </div>

        <div className="flex gap-3 mt-5 w-full shadow-md shadow-gray-300 border-2 hover:border-yellow-500">
          <div className="px-4 py-2 bg-yellow-400 text-white font-bangers text-2xl rounded-r-full">
            <CheckCircleOutlineIcon />
          </div>
          <button className="w-full text-sm font-semibold flex items-center">
            2.Biz Challenge
          </button>
        </div>

        <div className="flex gap-3 mt-5 w-full shadow-md shadow-gray-300 border-2 hover:border-yellow-500">
          <div className="px-4 py-2 bg-yellow-400 text-white font-bangers text-2xl rounded-r-full">
            <CheckCircleOutlineIcon />
          </div>
          <button className="w-full text-sm font-semibold flex items-center">
            3.Idea/strategy with Tactics
          </button>
        </div>

        <div className="flex gap-3 mt-5 w-full shadow-md shadow-gray-300 border-2 hover:border-yellow-500">
          <div className="px-4 py-2 bg-yellow-400 text-white font-bangers text-2xl rounded-r-full">
            <CheckCircleOutlineIcon />
          </div>
          <button className="w-full text-sm font-semibold flex items-center">
            4.Assumption & Experiment
          </button>
        </div>

        <div className="mt-8">
          <button className="px-6 py-2 bg-yellow-400 rounded-full border border-black font-semibold">
            Download Report
          </button>
        </div>
      </div>
    </>
  );
}

export default ReportNav;
