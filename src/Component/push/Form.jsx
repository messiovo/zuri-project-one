import React from "react";

const Form = () => {
  return (
    <form action="">
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-4">
        <span className="flex flex-col lg:w-2/4 w-full">
          <label
            htmlFor="first name"
            className=" text-sm font-medium"
          >
            First name
          </label>
          <input
            type="text"
            className="w-full h-10 px-4 outline-none text-md font-medium border-[1px] shadow-sm rounded-lg "
            placeholder="Enter your first name"
          />
        </span>
        <span className="flex flex-col lg:w-2/4 w-full">
          <label
            htmlFor="last name"
            className=" text-md font-medium"
          >
            Last name
          </label>
          <input
            type="text"
            className="w-full h-10 px-4 border-[1px] rounded-lg shadow-sm outline-none  text-light text-md font-medium  "
            placeholder="Enter your last name"
          />
        </span>
      </div>
      <div className="flex flex-col w-full mb-4">
        <label
          htmlFor="Email"
          className=" text-md font-medium"
        >
          Email
        </label>
        <input
          type="text"
          className="w-full h-10 px-4 outline-none text-md font-medium border-[1px] shadow-sm rounded-lg "
          placeholder="yourname@email.com"
        />
      </div>
      <div className="flex flex-col w-full ">
        <label
          htmlFor="Message"
          className="text-md font-medium"
        >
          Message
        </label>
        <textarea
          name=""
          id=""
          rows="4"
          className="outline-none  text-sm lg:text-md py-4 font-medium px-4 border-[1px] shadow-sm rounded-lg"
          placeholder="Send me a message and I'll reply you as soon as possible... "
        ></textarea>
      </div>
    </form>
  );
};

export default Form;
