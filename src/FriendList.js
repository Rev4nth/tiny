import React from "react";
import { Search } from "react-feather";
import avatar from "./avatar.jpeg";
import { MoreHorizontal } from "react-feather";

const users = [
  {
    name: "Matt Thompson",
    chat: "Thanks again you have been",
    time: "5 min",
    image: avatar,
    isOnline: true,
  },
  {
    name: "Claire Sharwood",
    chat: "Thanks again you have been",
    time: "5 min",
    image: avatar,
    isOnline: true,
  },
  {
    name: "Kristen Mckellar",
    chat: "Where is the nearest place to",
    time: "5 min",
    image: avatar,
    isOnline: true,
  },
  {
    name: "Shaun Gardner",
    chat: "Ok that sounds perfect",
    time: "5 min",
    image: avatar,
    isOnline: true,
  },
  {
    name: "Mace Windu",
    chat: "Protect the senator at all costs",
    time: "5 min",
    image: avatar,
    isOnline: true,
  },
  {
    name: "Kanye West",
    chat: "So tell the voice inside your..",
    time: "49 min",
    image: avatar,
    isOnline: true,
  },
];

const User = ({ name, chat, image, time }) => {
  return (
    <div className="flex text-white p-4 items-center justify-between">
      <div className="w-1/6  border-b border-gray-300 py-4">
        <img src={image} alt="avatar" className="rounded-full w-16 h-16" />
      </div>

      <div className="w-4/6 px-3">
        <p className="font-medium text-xl">{name}</p>
        <p className="text-sm text-gray-500">{chat}</p>
      </div>

      <div className="flex w-1/6 flex-col items-end">
        <MoreHorizontal size={18} />
        <span className="text-xs	text-gray-600">{time}</span>
      </div>
    </div>
  );
};
const FriendList = () => {
  return (
    <div className="friend-list w-3/12 overflow-auto">
      <div className="relative p-4">
        <div className="absolute pin-r pin-t mt-4 mr-4 ml-2">
          <Search size={18} />
        </div>
        <input
          type="search"
          className="bg-purple-white shadow rounded border-0 p-3 pl-8 w-full"
          placeholder="Search"
        />
      </div>

      <div>
        {users.map((user) => (
          <User
            name={user.name}
            chat={user.chat}
            time={user.time}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
