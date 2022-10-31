import React from "react";
import profilepic from './images/profile-pic.jpg'

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <img src={profilepic} className="w-20 h-20 rounded-full" />
      <p id="twitter" className="font-bold">
        Mercy Avwenagbiku
      </p>
      <p id="slack" className="hidden">
       Mercy Avwenagbiku
      </p>
    </div>
  );
};

export default Header;
