import React, { useState } from "react";
import MessageItem from "../molecules/MessageItem";
import ChatInput from "../molecules/ChatInput";

const MessagePanel = () => {
  const [messages, setMessages] = useState([]);

  // Function to handle sending a new message
  const addMessage = async (newMessage) => {
    if (newMessage.trim()) {
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);

      // try {
      //   // Sending the message to MongoDB
      //   const response = await fetch("/api/messages", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ content: newMessage }),
      //   });

      //   if (!response.ok) {
      //     console.error("Failed to save message to the database.");
      //   }
      // } catch (error) {
      //   console.error("Error while saving the message:", error.message);
      // }
    }
  };

  return (
    <div className="h-full flex flex-col px-3 py-1">
      <MessageItem messages={messages} />
      <div className="flex items-center mt-4">
        <ChatInput onSendMessage={addMessage} />
      </div>
    </div>
  );
};

export default MessagePanel;
