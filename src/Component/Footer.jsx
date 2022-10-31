import React from "react";
import { ZuriLogo } from "../assets/icons";
import logo from './images/I4G.png';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-t-2 border-primary lg:w-3/4 w-full pt-6 gap-6">
      <ZuriLogo />
      <h3 className="text-text-light">HNG Internship 9 Frontend Task</h3>
      <img src={logo} alt="ingressive for good logo" />
    </div>
  );
};

export default Footer;
