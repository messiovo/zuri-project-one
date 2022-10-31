import React from "react";
import { PushLink } from "./push";

const links = [
  {
    id: "twitter_link",
    to: "https://twitter.com/Mercy82104082",
    text: "Twitter Link",
  },
  {
    id: "btn__zuri",
    to: "https://training.zuri.team/",
    text: "Zuri Team",
  },
  {
    id: "books",
    to: "http://books.zuri.team",
    text: "Zuri Books",
  },
  {
    id: "book__python",
    to: "https://books.zuri.team/python-for-beginners?ref_id=Messiovo",
    text: "Python Books",
  },
  {
    id: "Python Books",
    to: "https://background.zuri.team",
    text: "Background Check for Coders",
  },
  {
    id: "book__design",
    to: "https://books.zuri.team/design-rules",
    text: "Design Books",
  },
];

const Link = () => {
  return (
    <div className="flex flex-col gap-6 w-full items-center">
      {links.map((items) => (
        <PushLink {...items} />
      ))}
    </div>
  );
};

export default Link;
