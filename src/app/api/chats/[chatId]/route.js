import Chat from "@/models/Chat";
import User from "@/models/User";
import { connectToDB } from "@/mongodb";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { chatId } = params;

    const chat = await Chat.findById(chatId)
      .populate({
        path: "members",
        model: User,
        select: "name profilePic", // Populate member name and profile picture
      })
      .exec();

    // Determine if it's a group or a one-on-one chat
    const isGroup = chat.members.length > 2;

    const response = {
      isGroup,
      groupName: isGroup ? chat.groupName : null,
      groupPic: isGroup ? chat.groupPic : null,
      otherUserName: !isGroup
        ? chat.members.find(
            (member) => member._id.toString() !== session.user.id
          ).name
        : null,
      otherUserPic: !isGroup
        ? chat.members.find(
            (member) => member._id.toString() !== session.user.id
          ).profilePic
        : null,
    };

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to get chat details", { status: 500 });
  }
};
