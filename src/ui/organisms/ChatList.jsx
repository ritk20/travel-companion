import React from "react";
import ChatListItem from "../molecules/ChatListItem";

const ChatList = () => {
  return (
    <div className="h-full flex flex-col mt-4 ml-4 bg-white shadow-md rounded-lg p-2 overflow-y-auto">
      <ChatListItem />
    </div>
  );
};

export default ChatList;
