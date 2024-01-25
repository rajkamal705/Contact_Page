import React, { useState } from "react";
import FormHeader from "./FormHeader";
import BasicInfo from "./BasicInfo";
import Challenge from "./Challenge";
import Assumption from "./Assumption";
import IdeaStrategy from "./IdeaStrategy";
import Report from "./Report";

function FormArea() {
  const [activeForm, setActiveForm] = useState("BasicInfo");

  return (
    <>
      <div className="bg-form-background bg-cover px-64 py-10 mt-12 mx-20">
        <div className="p-10 w-[60vw] max-w-[1200px] bg-white border-4 border-red-600 rounded-2xl">
          <FormHeader activeForm={activeForm} setActiveForm={setActiveForm} />
          {activeForm === 'BasicInfo' && <BasicInfo />}  
          {activeForm === 'Challenge' && <Challenge />}
          {activeForm === 'IdeaStrategy' && <IdeaStrategy />}
          {activeForm === 'Assumption' && <Assumption />}  
          {activeForm === 'Report' && <Report />}
        </div>
      </div>
    </>
  );
}

export default FormArea;
