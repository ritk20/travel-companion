import React from "react";

const Texts = ({ type, children }) => {
  const baseClass = "";
  let typeClass = "";

  switch (type) {
    case "heading":
      typeClass = "text-3xl font-bold justify-center flex";
      break;
    case "label":
      typeClass = "block text-sm font-bold mb-2";
      break;
    case "error":
      typeClass = "text-red-500 text-xs italic";
      break;
    case "success":
      typeClass = "text-green-500 text-xs italic";
      break;
    case "info":
      typeClass = "text-s italic";
      break;
    default:
      typeClass = "";
  }
  return <p className={`${baseClass} ${typeClass}`}>{children}</p>;
};

export default Texts;
