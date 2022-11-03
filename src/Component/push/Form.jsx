import React from "react";
import { useState } from "react";

const Form = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setChecked(!checked)

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-4">
        <span className="flex flex-col lg:w-2/4 w-full">
          <label
            htmlFor="first_name"
            id="first_name"
            className=" text-sm text-medium font-medium"
          >
            First name
          </label>
          <input
            type="text"
            className="w-full h-10 px-4 outline-none text-base font-normal border-[1px] shadow-sm rounded-lg "
            placeholder="Enter your first name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </span>
        <span className="flex flex-col lg:w-2/4 w-full">
          <label
            htmlFor="last_name"
            id="last_name"
            className=" text-sm font-medium text-medium"
          >
            Last name
          </label>
          <input
            type="text"
            className="w-full h-10 px-4 border-[1px] rounded-lg shadow-sm outline-none  text-light text-base font-normal  "
            placeholder="Enter your last name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </span>
      </div>
      <div className="flex flex-col w-full mb-4">
        <label
          htmlFor="Email"
          id="email"
          className=" text-sm font-medium text-medium"
        >
          Email
        </label>
        <input
          type="text"
          className="w-full h-10 px-4 outline-none text-base font-normal border-[1px] shadow-sm rounded-lg "
          placeholder="yourname@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full mb-4">
        <label htmlFor="Message" className="text-sm text-medium font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="resize-none outline-none  text-base py-4 font-normal px-4 border-[1px] shadow-sm rounded-lg"
          placeholder="Send me a message and I'll reply you as soon as possible... "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="flex items-start lg:items-center gap-2">
        <input
          type="checkbox"
          className="required:border-[#D0D5DD] required:rounded-xl outline-none"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="" className="text-base text-medium">
          You agree to providing your data to who may contact you.
        </label>
      </div>

      <button
        id="btn__submit"
        className="border-[1px] w-full mt-4 py-2 bg-[#1570EF] text-white rounded-lg shadow-sm"
      >
        Send message
      </button>
    </form>
  );
};

export default Form;
