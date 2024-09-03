"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";

const ChatInput = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    onSendMessage(newMessage);
    setNewMessage(""); // Clear input after sending
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <Input
        type="message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white p-2 rounded-r-lg"
      >
        Send
      </button>
    </>
  );
};

export default ChatInput;
