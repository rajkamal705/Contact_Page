import React from "react";
import FormHeader from "./FormHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Assumption() {
  return (
    <>
      <div>
        <p className="text-4xl mt-5 font-bangers text-red-700 leading-10">
          BASIC INFORMATION
        </p>
      </div>

      <div>
        <p className="mt-2 font-architectsDaughter">
          This helps us understands the asssumptions that can make or break your
          idea/strategy.
        </p>
      </div>

      <div className="flex gap-36 mt-8">
        {/* left div: */}
        <div>
          <form>
            <div className="flex flex-row gap-5">
              <label className="text-gray-400" for="intro">
                We would like to
              </label>
              <select
                id="intro"
                className="outline-none border-b-2 border-gray-700"
              >
                <option value="passionate">Discover</option>
              </select>
            </div>

            <div className="flex flex-row gap-5 mt-3">
              <label className="text-gray-400" for="intro">
                which will test for
              </label>
              <select
                id="intro"
                className="outline-none border-b-2 border-gray-700"
              >
                <option value="passionate">Desirability</option>
              </select>
            </div>

            <div className="flex flex-row gap-5 mt-3">
              <label className="text-gray-400" for="intro">
                about
              </label>
              <select
                id="intro"
                className="outline-none border-b-2 border-gray-700"
              >
                <option value="passionate">Business Model</option>
              </select>
            </div>

            <div className="mt-3">
              <p className="leading-10 text-gray-400 font-geologica text-base">
                and our rickiest assumption is
              </p>
              <p className="text-gray-500 border-b-2 border-gray-700 w-2/3">
                Example: 'Market demands exceeds competitors supply'
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <label className="text-gray-400" for="intro">
                and our riskiest assumption area
              </label>
              <select
                id="intro"
                className="outline-none border-b-2 border-gray-700 w-52"
              >
                <option value="passionate">Willingness to Pay</option>
              </select>
            </div>

            <div className="mt-10 flex gap-5">
              <button className="bg-black px-6 py-2 rounded-full">
                random
              </button>
              <button className="bg-yellow-400 px-3 py-2 rounded-full text-bold flex gap-2">
                Get the full Report
                <ArrowForwardIcon />
              </button>
            </div>
          </form>
        </div>

        {/* right div: */}
        <div className="flex flex-col w-40 h-96 gap-10">
          <div className="w-40 h-40 font-bangers p-4 text-center bg-red-800 rounded-xl text-white">
            <p>
              show aassumption cards. does not matter if they can’t choose one
            </p>
          </div>

          <div className="w-40 h-40 font-bangers p-4 text-center bg-red-800 rounded-xl text-white">
            <p>
              One of the recommended Experiment Method for your Assumption from
              a deck of 39 Methods{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assumption;
