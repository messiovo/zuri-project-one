import React from "react";
import {Link} from "react-router-dom"

const PushLink = ({ to, id, text }) => {
  return (
    <Link to={to} id={id} className="block bg-primary px-6 py-4 lg:w-3/4 w-full text-center rounded-lg font-medium cursor-pointer hover:bg-gray-400 transition-colors ease-in-out duration-700">
      {text}
    </Link>
  );
};

export default PushLink;
