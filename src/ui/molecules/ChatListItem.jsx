import React from "react";

const chats = [
  {
    name: "Ritobroto (You)",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Luitporiya KGPians",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "North-East Starks",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Vistara",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Chess Club Govs <> Sophs '24 -'25",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Raman Dubey Chess Club",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Govs Unofficial",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "MECH Third Year Y-22",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "MECH Third Year Y-22",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "MECH Third Year Y-22",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "MECH Third Year Y-22",
    image: "https://via.placeholder.com/50",
  },
];
const ChatListItem = () => {
  return (
    <div>
      {chats.map((chat, index) => (
        <div
          key={index}
          className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
        >
          <img
            src={chat.image}
            alt={chat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-4 text-gray-800 font-semibold">{chat.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatListItem;
