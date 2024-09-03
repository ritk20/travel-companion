import React from "react";
import ChatList from "../organisms/ChatList";
import Navbar from "../organisms/Navbar";
import MessagePanel from "../organisms/MessagePanel";

const ChatPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex w-full overflow-hidden h-screen">
        <div className="w-[30%] max-md:hidden">
          <ChatList />
        </div>
        <div className="w-[70%] max-md:w-full">
          <MessagePanel />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
