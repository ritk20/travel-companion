"use client"; // Ensure this component is client-side rendered
import React from "react";
import { signOut } from "next-auth/react";

const Button = ({ children, onClick, name }) => {
  let baseClass = "px-4 py-2 text-white rounded-md cursor-pointer";
  let typeClass = "";

  switch (name) {
    case "login":
      typeClass = "bg-blue-500 hover:bg-blue-700";
      break;
    case "logout":
      typeClass = "";
      baseClass = "";
      onClick = () => signOut({ callbackUrl: "/" });
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
