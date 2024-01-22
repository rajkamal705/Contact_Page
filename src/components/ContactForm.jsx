import React from "react";
import email from "../Icons/Email.svg";
import user from "../Icons/User.svg";
import message from "../Icons/Message.svg";

function ContactForm() {
  return (
    <>
      <div className="w-96">
        <form className="flex flex-col gap-y-5">
          <div className="flex items-center relative">
            <input
              className="p-4 w-96 border border-slate-300 rounded-md hover:border-blue-600"
              type="text"
              placeholder="Name"
            />
            <span className="absolute right-4">
              <img src={user} alt="user-icon" />
            </span>
          </div>

          <div className="flex items-center relative">
            <input
              className="p-4 w-96 border border-slate-300 rounded-md hover:border-blue-600"
              type="email"
              placeholder="xyz@gmail.com"
            />
            <span className="absolute right-4">
              <img src={email} alt="email-icon" />
            </span>
          </div>

          <div className="flex items-center relative">
            <textarea
              className="p-4 w-96 border border-slate-300 rounded-md hover:border-blue-600"
              name="Message"
              placeholder="Message"
              rows={5}
            />
            <span className="absolute right-4 top-5">
              <img src={message} alt="message-icon" />
            </span>
          </div>

        </form>

        <button className="flex gap-4 mt-5 px-8 py-4 border border-slate-300 rounded-lg bg-indigo-600 text-white hover:bg-white hover:text-black">
          Let's talk
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default ContactForm;
