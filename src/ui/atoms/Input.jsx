import React from "react";

const Input = ({ type, placeholder, name, value, onChange, id }) => {
  const baseClass = "text-black";
  let typeClass = "";

  switch (type) {
    case "text":
    case "email":
    case "password":
      typeClass = "bg-gray-100 px-3 py-2 rounded-md w-full";
      break;
    case "search":
      typeClass = "bg-gray-100 px-2 pr-10 py-1 rounded-xl w-full";
      break;
    default:
      typeClass = "";
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      className={`${baseClass} ${typeClass}`}
    />
  );
};

export default Input;
