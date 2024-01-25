import React from "react";

function FormHeader({activeForm, setActiveForm}) {
  function handleClick(formName) {
    setActiveForm(formName);
  }

  return (
    <>
      <div className="flex justify-between">
        <button onClick={(e) => handleClick('BasicInfo')} className="text-xl font-bangers">BASIC INFO</button>
        <button onClick={(e) => handleClick('Challenge')} className="text-xl font-bangers">CHALLENGE</button>
        <button onClick={(e) => handleClick('IdeaStrategy')} className="text-xl font-bangers">IDEA/STRATEGY</button>
        <button onClick={(e) => handleClick('Assumption')} className="text-xl font-bangers">ASSUMPTION</button>
        <button onClick={(e) => handleClick('Report')} className="text-xl font-bangers">RX REPORT</button>
      </div>
    </>
  );
}

export default FormHeader;
