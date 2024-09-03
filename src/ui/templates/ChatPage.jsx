import React from "react";
import ChatList from "../organisms/ChatList";
import Navbar from "../organisms/Navbar";
import MessagePanel from "../organisms/MessagePanel";

const ChatPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex w-full">
        <div className="w-[30%] h-fit max-md:hidden">
          <ChatList />
        </div>
        <div className="w-[70%] h-fit max-md:w-full">
          <MessagePanel />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
