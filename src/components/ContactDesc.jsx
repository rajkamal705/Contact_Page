import React from "react";
import mail from "../Icons/Mail.svg";
import home from "../Icons/Building.svg";
import call from "../Icons/Phone.svg";

function ContactDesc(props) {
  return (
    <>
      <div className="flex-wrap w-96">
        <h1 className="text-6xl font-semibold gap-y-2">{props.head}</h1>
        <p className="mt-10 text-gray-500">{props.body}</p>

        <p className="mt-10 flex gap-6">
          <img src={mail} alt="mail-logo" />
          info@yourdomain.com
        </p>

        <p className="mt-5 flex gap-6">
          <img src={home} alt="home-logo" />
          Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki jakarta
        </p>

        <p className="mt-5 flex gap-6">
          <img src={call} alt="call-logo" />
          +62 (0) 000 0000 00
        </p>
      </div>
    </>
  );
}

export default ContactDesc;
