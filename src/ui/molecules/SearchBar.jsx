// SearchBar.jsx
import React from "react";
import Input from "../atoms/Input";
import Icons from "../atoms/Icons";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="relative flex items-center">
      <Input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by city or country"
        className="pr-10 w-full"
      />
      <Icons type="submit" name="search" />
    </div>
  );
};

export default SearchBar;
