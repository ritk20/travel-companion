import React from "react";
import Icons from "../atoms/Icons";

const NavButton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Icons type="profile" />
      Logout
    </div>
  );
};

export default NavButton;
