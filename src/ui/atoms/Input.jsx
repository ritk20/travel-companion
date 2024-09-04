import React from "react";

const Input = ({ type, placeholder, value, onChange, onKeyDown }) => {
  const baseClass = "text-black";
  let typeClass = "";

  switch (type) {
    case "text":
    case "email":
    case "password":
      typeClass = "bg-gray-100 px-3 py-2 rounded-md w-full";
      break;
    case "search":
      typeClass = "bg-gray-100 px-3 pr-10 py-1 rounded-xl w-full";
      break;
    case "message":
      typeClass = "flex-grow p-2 border border-gray-300 rounded-l-lg";
      break;
    default:
      typeClass = "";
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`${baseClass} ${typeClass}`}
    />
  );
};

export default Input;
