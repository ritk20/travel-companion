import React from "react";
import Icons from "../atoms/Icons";

const MessagePanel = () => {
  return (
    <div className="border-l-2 border-emerald-300 h-screen text-black px-3 py-1">
      <div className="min-[768px]:hidden">
        <Icons name="back" />
      </div>
      MessagePanel
    </div>
  );
};

export default MessagePanel;
