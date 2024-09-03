import React from "react";

const MessageItem = ({ messages }) => {
  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-4 overflow-y-auto mt-4">
      {messages.map((message, index) => (
        <div key={index} className="bg-gray-100 p-2 my-2 rounded-lg">
          {message}
        </div>
      ))}
    </div>
  );
};

export default MessageItem;
