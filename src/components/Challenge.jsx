import React from "react";
import FormHeader from "./FormHeader";

function Challenge() {
  return (
    <>
      <div>
        <p className="text-4xl mt-5 font-bangers text-red-700 leading-10">
          FRAME YOUR CHALLENGE
        </p>
      </div>

      <div>
        <p className="w-80 mt-2 font-architectsDaughter">
          This helps us understanding your personal context and challenge.
        </p>
      </div>

      <form>
        <div className="flex flex-row gap-10 mt-10">
          <p className="leading-10 font-geologica text-base">How Might We</p>
          <input
            className="border-b-2 border-gray-400 w-[28rem]"
            type="text"
            placeholder="Fill in a suitable Action verb(help, create, assist, deliver..)"
          />
        </div>

        <div className="flex flex-row gap-10 mt-2">
          <p className="leading-10 font-geologica text-base">subject (who)</p>
          <input
            className="border-b-2 border-gray-400 w-[30rem]"
            type="text"
            placeholder="Tell us whom are they targeting, surving, influencing, impacting"
          />
        </div>

        <div className="flex flex-row gap-10 mt-2">
          <p className="leading-10 font-geologica text-base">
            so that they (outcome)
          </p>
          <input
            className="border-b-2 border-gray-400 w-[32rem]"
            type="text"
            placeholder="Fill in the impact/benefit you want them to realise/achieve to deliver"
          />
        </div>

        <div className="flex flex-row gap-20 mt-5">
          <p className="leading-10 font-geologica text-base">
            More about your target customer
          </p>
          <div className="flex gap-2">
            <button className="bg-yellow-400 border px-5 py-2 border-black rounded-l-full">
              Yes
            </button>
            <button className="bg-gray-400 border px-5 py-2 border-black rounded-r-full">
              No
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-10 mt-5">
          <p className="leading-10 font-geologica text-base text-gray-600">
            Are they new customers?
          </p>
          <div className="flex gap-2">
            <button className="bg-yellow-400 border px-5 py-2 border-black rounded-l-full">
              Yes
            </button>
            <button className="bg-gray-400 border px-5 py-2 border-black rounded-r-full">
              No
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-10 mt-5">
          <p className="leading-10 font-geologica  text-gray-600">
            Are they happy? Do they have additional needs?
          </p>
          <input
            className="border-b-2 border-gray-400 w-[16rem]"
            type="text"
            placeholder="Fill the answer here"
          />
        </div>
      </form>
    </>
  );
}

export default Challenge;
