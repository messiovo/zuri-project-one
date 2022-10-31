import React from "react";

const PushLink = ({ to, id, text }) => {
  return (
    <a href={to} id={id} className="px-28 py-8">
      {text}
    </a>
  );
};

export default PushLink;
