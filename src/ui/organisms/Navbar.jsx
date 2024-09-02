import React from "react";
import Logo from "../molecules/Logo";
import SearchBar from "../molecules/SearchBar";
import NavButton from "../molecules/NavButton";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-800 p-4">
        <Logo />
        <SearchBar />
        <NavButton />
      </div>
    </div>
  );
};

export default Navbar;
