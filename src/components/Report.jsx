import React from "react";
import ReportNav from "./ReportNav";

function Report() {
  return (
    <>
      <div className="mt-5 flex gap-10">
        {/* left div: */}
        <ReportNav />

        {/* right div: */}
        <div className="w-3/5 bg-gradient-to-r from-green-200 to-green-100 rounded-r-lg">
          <div className="mt-8 flex h-5 bg-yellow-400">
            <div className="px-3 relative bottom-2 left-16 bg-black text-white font-bangers rounded-r-full">1</div>
            <p className="relative left-16 font-bangers text-white">ABOUT YOU</p>
          </div>

          <div className="flex flex-col gap-3 m-10 p-8 bg-white w-96 h-96">
            <div>
              <p className="text-gray-400">I am</p>
              <p className="text-xl">Rajesh</p>
            </div>

            <div>
              <p className="text-gray-400">My Email</p>
              <p className="text-xl">Raj@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-400">I am a</p>
              <p className="text-xl">Professional</p>
            </div>

            <div>
              <p className="text-gray-400">I am at</p>
              <p className="text-xl">Early Stage</p>
            </div>

            <div>
              <p className="text-gray-400">and I am</p>
              <p className="text-xl">Starting your professional journey <br/> Exploring career options</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
