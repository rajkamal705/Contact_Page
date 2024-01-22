import React from "react";
import facebook from "../Icons/Facebook.svg";
import instagram from "../Icons/Insta.svg";
import linkedin from "../Icons/Linkedin.svg";
import twitter from "../Icons/Twitter.svg";

function ContactLinks() {
  return (
    <>
      <div className="mt-20 flex justify-evenly">
        <div className="flex px-6 py-6 gap-4 text-gray-500 hover:text-black hover:rounded-xl hover:shadow-2xl">
          <div><img src={facebook} alt="facebook-logo" /></div>
          <div className="p-2"><a>Facebook</a></div>
        </div>

        <div className="flex px-6 py-6 gap-4 text-gray-500 hover:text-black hover:rounded-xl hover:shadow-2xl">
          <div><img src={instagram} alt="facebook-logo" /></div>
          <div className="p-2"><a>Instagram</a></div>
        </div>

        <div className="flex px-6 py-6 gap-4 text-gray-500 hover:text-black hover:rounded-xl hover:shadow-2xl">
          <div><img src={linkedin} alt="facebook-logo" /></div>
          <div className="p-2"><a>Linkedin</a></div>
        </div>

        <div className="flex px-6 py-6 gap-4 text-gray-500 hover:text-black hover:rounded-xl hover:shadow-2xl">
          <div><img src={twitter} alt="facebook-logo" /></div>
          <div className="p-2"><a>Twitter</a></div>
        </div>

      </div>
    </>
  );
}

export default ContactLinks;
