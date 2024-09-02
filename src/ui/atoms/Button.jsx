import React from "react";
import Icons from "./Icons";

const Button = ({ children, onClick, name }) => {
  const baseClass = "px-4 py-2 text-white rounded-md";
  let typeClass = "";

  switch (name) {
    case "login":
      typeClass = "bg-blue-500 hover:bg-blue-700";
      break;
    case "logout":
      typeClass = "bg-red-500 hover:bg-red-700";
      break;
    case "register":
      typeClass = "bg-green-500 hover:bg-green-700";
      break;
    default:
      typeClass = "bg-gray-500 hover:bg-gray-700";
  }

  return (
    <div className="">
      <button className={`${baseClass} ${typeClass}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
