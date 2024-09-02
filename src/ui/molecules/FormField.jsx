import React from "react";
import Input from "../atoms/Input";
import Texts from "../atoms/Texts";

const FormField = ({ label, type, placeholder, name, value, onChange }) => (
  <div className="mb-4">
    <Texts type="label">{label}</Texts>
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormField;
