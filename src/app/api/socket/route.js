//app/api/socket/route.js

import { Server } from "socket.io";
import Message from "@/models/Message";
import Chat from "@/models/Chat";
import { connectToDB } from "@/mongodb";

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log("Initializing Socket.IO server"); // Debugging
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("A user connected");

      socket.on("joinChat", (chatId) => {
        socket.join(chatId);
        console.log(`User joined chat: ${chatId}`); // Debugging
      });

      socket.on("leaveChat", (chatId) => {
        socket.leave(chatId);
        console.log(`User left chat: ${chatId}`); // Debugging
      });

      socket.on("sendMessage", async (data) => {
        try {
          await connectToDB();

          const { sender, chatId, content, timestamp } = data;

          // Create a new message in the database
          const newMessage = new Message({
            sender,
            content,
            chat: chatId,
            timestamp,
          });
          await newMessage.save();

          // Update the Chat with the new message
          await Chat.findByIdAndUpdate(chatId, {
            $push: { messages: newMessage._id },
          });

          // Emit the message to all clients in the same chat room
          io.to(chatId).emit("newMessage", newMessage);
          console.log("Message sent:", newMessage); // Debugging
        } catch (err) {
          console.error("Error saving message:", err.message);
        }
      });

      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });
  } else {
    console.log("Socket.IO server already initialized"); // Debugging
  }
  res.end();
};

export const GET = ioHandler;
export const POST = ioHandler;
