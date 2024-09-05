import { connectToDB } from "@/mongodb";
import Chat from "@/models/Chat";
import User from "@/models/User";

export const POST = async (req) => {
  try {
    await connectToDB();
    const body = await req.json();
    const { currentUserID, members, isGroupChat, name, groupPhoto } = body;

    // Ensure the current user is included in members
    if (!members.includes(currentUserID)) {
      members.push(currentUserID);
    }

    const sortedMembers = members.sort();
    let queryExistingChat;

    // Handle individual (1-on-1) chats
    if (!isGroupChat) {
      queryExistingChat = {
        isGroupChat: false,
        members: { $all: sortedMembers, $size: sortedMembers.length }, // Check members
      };
    } else {
      // Handle group chats
      queryExistingChat = {
        isGroupChat: true,
        name: name, // Ensure group chat uniqueness by name
      };
    }

    // Check if a chat with the same members or group name already exists
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

    // Create new chat if none exists
    const newChat = new Chat({
      members: sortedMembers,
      isGroupChat,
      name,
      groupPhoto,
    });

    await newChat.save();

    // Add the chat to each user's chat list
    const query = { _id: { $in: members } };
    const update = { $push: { chats: newChat._id } };
    await User.updateMany(query, update);

    return new Response(JSON.stringify(newChat), { status: 201 });
  } catch (error) {
    console.error("Failed to create chat", error);
    return new Response(
      JSON.stringify({ message: "Failed to create chat", error }),
      { status: 500 }
    );
  }
};
