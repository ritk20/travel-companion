"use client";
// SearchBar.jsx
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Icons from "../atoms/Icons";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <Input
        type="text"
        placeholder="Search..."
        name="search"
        value={searchTerm}
        onChange={handleChange}
        className="pr-10 w-full"
      />
      <Icons type="submit" name="search" />
    </form>
  );
};

export default SearchBar;
