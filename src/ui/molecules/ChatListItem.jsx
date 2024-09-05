"use client";
import React from "react";
import { useSession } from "next-auth/react";
// const chats = [
//   {
//     name: "Ritobroto (You)",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "Luitporiya KGPians",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "North-East Starks",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "Vistara",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "Chess Club Govs <> Sophs '24 -'25",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "Raman Dubey Chess Club",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "Govs Unofficial",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "MECH Third Year Y-22",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "MECH Third Year Y-22",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "MECH Third Year Y-22",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     name: "MECH Third Year Y-22",
//     image: "https://via.placeholder.com/50",
//   },
// ];
const ChatListItem = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user;

  const [loading, setLoading] = React.useState(true);
  const [chats, setChats] = React.useState([]);

  const getChats = async () => {
    try {
      const res = await fetch(`/api/users/${currentUser._id}`);
      const data = await res.json();
      setChats(data);
      setLoading(false);
      console.log("Chats:", data);
    } catch (error) {
      console.error("Failed to fetch chats", error);
    }
  };

  React.useEffect(() => {
    if (currentUser) {
      getChats();
    }
  }, [currentUser]);
  return (
    <div>
      {chats.map((chat, index) => (
        <div
          key={index}
          className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
        >
          {chat?.isGroup ? (
            <img
              src={chat?.groupPhoto || "https://via.placeholder.com/50"}
              alt="group-photo"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <img
              src={
                otherMembers[0].profileImage || "https://via.placeholder.com/50"
              }
              alt="profile-photo"
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <div className="ml-4 text-gray-800 font-semibold">{chat.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatListItem;
