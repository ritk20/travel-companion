"use client";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import MessageItem from "../molecules/MessageItem";
import ChatInput from "../molecules/ChatInput";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation"; // To get chatId from the URL

let socket;

const MessagePanel = () => {
  const [messages, setMessages] = useState([]);
  const [chatDetails, setChatDetails] = useState(null); // State to store chat details (name, profile pic, etc.)
  const { data: session } = useSession(); // To get the logged-in user's info
  const { chatId } = useParams(); // Assume you're using dynamic routing with chatId in the URL

  useEffect(() => {
    // Call the API route to initialize the Socket.IO server
    fetch("/api/socket");

    // Connect to the Socket.IO server
    socket = io();

    // Check if socket is initialized
    if (!socket) {
      console.error("Socket.IO client failed to initialize");
      return;
    }

    // Join the specific chat room
    socket.emit("joinChat", chatId);
    console.log("Joined chat:", chatId); // Debugging

    // Fetch previous messages from the database when the component loads
    getMessages();

    // Fetch chat details (name, profile picture, etc.)
    fetchChatDetails();

    // Listen for incoming messages from the server

    // Clean up on component unmount
    return () => {
      if (socket) {
        socket.emit("leaveChat", chatId);
        socket.disconnect();
        console.log("Left chat:", chatId); // Debugging
      }
    };
  }, [chatId]);

  // Function to handle sending a new message
  const addMessage = async (newMessage) => {
    if (newMessage.trim()) {
      const messageData = {
        content: newMessage,
        sender: session?.user?.id, // Use user ID instead of email
        chatId,
        timestamp: new Date().toISOString(),
      };

      console.log("Sending message:", messageData); // Debugging

      // Check if socket is initialized before emitting
      if (socket) {
        console.log("Emitting message via Socket.IO");
        socket.emit("sendMessage", messageData);
      } else {
        console.error("Socket.IO client is not initialized");
      }

      // Send message to the server
      try {
        const response = await fetch("/api/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        const savedMessage = await response.json();

        console.log("Message saved:", savedMessage); // Debugging

        // Update messages locally with the saved message from the server
        setMessages((prevMessages) => [...prevMessages, savedMessage]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };
  // Function to fetch previous messages for the current chat
  const getMessages = async () => {
    try {
      const response = await fetch(`/api/messages?chatId=${chatId}`);
      const data = await response.json();
      console.log("Fetched messages:", data); // Debugging
      setMessages(data);
    } catch (error) {
      console.error("Failed to fetch messages:", error.message);
    }
  };

  // Function to fetch chat details (name, profile picture, etc.)
  const fetchChatDetails = async () => {
    try {
      const response = await fetch(`/api/chats/${chatId}`);
      const data = await response.json();
      console.log("Fetched chat details:", data); // Debugging
      setChatDetails(data);
    } catch (error) {
      console.error("Failed to fetch chat details:", error.message);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Navbar for chat details */}
      {chatDetails && (
        <div className="flex items-center p-3 bg-gray-200">
          <img
            src={
              chatDetails.isGroup
                ? chatDetails.groupPic
                : chatDetails.otherUserPic
            }
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-3 text-lg font-bold">
            {chatDetails.isGroup
              ? chatDetails.groupName
              : chatDetails.otherUserName}
          </span>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-1">
        {messages.map((msg, index) => (
          <MessageItem
            key={index}
            message={msg.content}
            sender={msg.sender}
            timestamp={msg.timestamp}
            isOwnMessage={msg.sender === session?.user?.email} // Check if the message is sent by the current user
          />
        ))}
      </div>

      {/* Chat input */}
      <div className="flex items-center mt-4">
        <ChatInput onSendMessage={addMessage} />
      </div>
    </div>
  );
};

export default MessagePanel;
