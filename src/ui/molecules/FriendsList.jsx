// FriendsList.js
import React from "react";
import ListItem from "../atoms/ListItem";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <ListItem key={friend._id}>{friend.name}</ListItem>
      ))}
    </ul>
  );
};

export default FriendsList;
