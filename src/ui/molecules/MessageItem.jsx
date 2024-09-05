const MessageItem = ({ message, sender, timestamp, isOwnMessage }) => {
  return (
    <div className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}>
      <div
        className={`p-2 rounded-lg ${
          isOwnMessage ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        <p className="font-bold">{isOwnMessage ? "You" : sender.name}</p>
        <p>{message}</p>
        <span className="text-xs text-gray-500">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default MessageItem;
