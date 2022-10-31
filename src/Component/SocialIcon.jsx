import React from "react";
import { Git, Slack } from "../assets/icons";

const SocialIcon = () => {
  return (
    <div className="flex gap-3">
      <Slack className="w-6 h-6" />
      <a href="https://github.com/Mercy82104082">
        <Git className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialIcon;
