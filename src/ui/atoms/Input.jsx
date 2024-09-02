import React from "react";

const Input = (
  { type, placeholder, name, value, onChange } // Accept name prop here
) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name} // Apply name prop to input element
    value={value}
    onChange={onChange}
    className="px-4 py-2 border rounded text-black"
  />
);

export default Input;
