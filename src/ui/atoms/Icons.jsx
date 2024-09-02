import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

const Icons = ({ type }) => {
  const iconSize = 20;
  switch (type) {
    case "search":
      return <FaSearch size={iconSize} />;
    case "profile":
      return <CgProfile size={iconSize} className="mx-2" />;
    case "message":
      return <div>Message</div>;
    case "settings":
      return <IoMdSettings size={iconSize} />;
    default:
      return <div>Icons</div>;
  }
};

export default Icons;
