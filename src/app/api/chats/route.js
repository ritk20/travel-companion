// pages/api/chats/index.js
import { connectToDB } from "@/mongodb";
import Chat from "@/models/Chat";
import User from "@/models/User";

export const POST = async (req) => {
  try {
    // Connect to the database
    await connectToDB();
    const body = await req.json();

    const { currentUserID, members, isGroupChat, name, groupPhoto } = body;

    if (!members.includes(currentUserID)) {
      members.push(currentUserID);
    }
    // Query to find an existing chat with the same members and group type
    const queryExistingChat = {
      members: { $all: members },
      isGroupChat,
    };

    const existingChat = await Chat.findOne(queryExistingChat);

    if (existingChat) {
      return new Response(
        JSON.stringify({
          message: "Chat already exists",
          chat: existingChat,
        }),
        { status: 200 }
      );
    }

    // Create a new chat if it doesn't exist
    const chat = new Chat({
      members,
      isGroupChat,
      name,
      groupPhoto,
    });

    const newChat = await chat.save();

    // Add the chat to the users' chat lists
    const query = { _id: { $in: members } };
    const update = { $push: { chats: newChat._id } };
    const options = { multi: true };

    await User.updateMany(query, update, options);

    return new Response(JSON.stringify(newChat), { status: 201 });
  } catch (error) {
    console.error("Failed to create chat", error);
    return new Response(
      JSON.stringify({ message: "Failed to create chat", error }),
      { status: 500 }
    );
  }
};
