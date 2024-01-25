import React from "react";
import FormHeader from "./FormHeader";

function BasicInfo() {
  return (
    <>
      <div>
        <p className="text-4xl mt-5 font-bangers text-red-700 leading-10">
          BASIC INFORMATION
        </p>
      </div>

      <div>
        <p className="w-96 mt-2 font-architectsDaughter">
          This helps us understanding who you are so we can create a
          personalised report.
        </p>
      </div>

      <form>
        <div className="flex flex-row gap-10 mt-10">
          <input
            className="border-b-2 outline outline-none border-gray-500 w-[28rem] text-lg"
            type="text"
            placeholder="Name"
          />

          <input
            className="border-b-2 outline outline-none border-gray-500 w-[28rem] text-lg"
            type="text"
            placeholder="E-mail"
          />
        </div>

        <div className="flex flex-row gap-10 mt-10">
          <label
            className="text-gray-400 border-b-2 border-gray-500 w-[18rem] text-lg"
            for="intro"
          >
            Which path best describes you?{" "}
          </label>
          <select id="intro" className="outline-none">
            <option value="passionate"></option>
            <option value="intelligent">intelligent</option>
            <option value="hard working">hard working</option>
            <option value="comrade">comrade</option>
          </select>
        </div>

        <div className="flex flex-row gap-10 mt-10">
          <label
            className="text-gray-400 border-b-2 border-gray-500 text-lg"
            for="intro"
          >
            What stage are you at?{" "}
          </label>
          <select id="intro" className="outline-none">
            <option value="passionate"></option>
            <option value="intelligent">intelligent</option>
            <option value="hard working">hard working</option>
            <option value="comrade">comrade</option>
          </select>

          <label
            className="text-gray-400 border-b-2 border-gray-500 text-lg"
            for="intro"
          >
            Where in stage are you at?
          </label>
          <select id="intro" className="outline-none">
            <option value="passionate"></option>
            <option value="intelligent">intelligent</option>
            <option value="hard working">hard working</option>
            <option value="comrade">comrade</option>
          </select>
        </div>

        <div className="flex flex-row gap-10 mt-10">
          <input
            className="border-b-2 outline outline-none border-gray-500 w-[20rem] text-lg"
            type="text"
            placeholder="Your Linkedin Profile (paste the URL)"
          />
        </div>
      </form>

      <div className="mt-5 flex flex-row-reverse">
        <div className="mt-10 w-3/4">
          <p className="text-gray-600">
            <span className="text-gray-600 font-bold">* Venture/ Company</span>{" "}
            is consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>
        </div>
      </div>
    </>
  );
}

export default BasicInfo;
