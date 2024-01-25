import React from "react";
import FormHeader from "./FormHeader";

function IdeaStrategy() {
  return (
    <>
      <div>
        <p className="text-4xl mt-5 font-bangers text-red-700 leading-10">
          CRAFT YOUR IDEA/STRATEGY
        </p>
      </div>

      <div>
        <p className="w-3/5 mt-2 font-architectsDaughter">
          This helps us understand the innovation you are creating
        </p>
      </div>

      <div className="flex">
        {/* left div */}
        <div>
          <form>
            <div className="flex flex-row gap-10 mt-10">
              <input
                className="border-b-2 outline outline-none border-gray-700 w-[20rem] text-lg"
                type="text"
                placeholder="What is the value proposition you offer?"
              />
            </div>

            <div className="flex flex-row gap-10 mt-10">
              <input
                className="border-b-2 outline outline-none border-gray-700 w-[25rem] text-lg"
                type="text"
                placeholder="Your audience and the problem you are solving??"
              />
            </div>

            <div className="flex flex-row gap-10 mt-10">
              <input
                className="border-b-2 outline outline-none border-gray-700 w-[20rem] text-lg"
                type="text"
                placeholder="What is your secret sauce*/USP?"
              />
            </div>

            <div className="flex flex-row gap-10 mt-10">
              <label
                className="text-gray-400 border-b-2 border-gray-700 w-[18rem] text-lg"
                for="intro"
              >
                Choose your secret category{" "}
              </label>
              <select id="intro" className="outline-none">
                <option value="passionate"></option>
                <option value="intelligent">intelligent</option>
                <option value="hard working">hard working</option>
                <option value="comrade">comrade</option>
              </select>
            </div>
          </form>
        </div>

        {/* right div: */}
        <div className="flex justify-center align-middle gap-3">
          <div className="w-40 h-40 p-2"></div>
          <div className="w-40 h-40 p-2"></div>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <div className="mt-10 w-2/3">
          <p className="text-gray-600 text-sm">
            <span className="text-gray-600 font-semibold">* Secret Sauce</span>{" "}
            is consectetur adipiscing elit, sed do eiusmod tempor incididunt.{" "}
            <br />
            <a
              href="#"
              className="text-lg text-gray-500 font-bold border-b-2 border-gray-500"
            >
              Map your secret sauce ,{" "}
            </a>{" "}
            7 + category to choose from.
          </p>
        </div>
      </div>
    </>
  );
}

export default IdeaStrategy;
