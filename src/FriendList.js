import React from "react";
import { Search, Circle } from "react-feather";
import { MoreHorizontal } from "react-feather";

import matt from "./assets/matt.jpg";
import claire from "./assets/claire.jpg";
import kristen from "./assets/kristen.jpg";
import shaun from "./assets/shaun.jpg";
import mace from "./assets/mace.jpg";
import kanye from "./assets/kanye.jpg";

const users = [
  {
    name: "Matt Thompson",
    chat: "Thanks again you have been very",
    time: "5 min",
    image: matt,
    isOnline: true,
  },
  {
    name: "Claire Sharwood",
    chat: "My selfie game is lacking can you",
    time: "5 min",
    image: claire,
    isOnline: false,
  },
  {
    name: "Kristen Mckellar",
    chat: "Where is the nearest place to",
    time: "5 min",
    image: kristen,
    isOnline: false,
  },
  {
    name: "Shaun Gardner",
    chat: "Ok that sounds perfect",
    time: "5 min",
    image: shaun,
    isOnline: true,
  },
  {
    name: "Mace Windu",
    chat: "Protect the senator at all costs",
    time: "5 min",
    image: mace,
    isOnline: true,
  },
  {
    name: "Kanye West",
    chat: "So tell the voice inside your..",
    time: "49 min",
    image: kanye,
    isOnline: false,
  },
];

const User = ({ name, chat, image, time, active, isOnline }) => {
  return (
    <div
      className={`flex text-white px-4 items-center justify-between cursor-pointer hover:bg-gray-700 ${
        active && "border-l-2 border-blue-500"
      }`}
    >
      <div className="w-1/6 relative  border-b border-gray-700 py-5">
        {isOnline && (
          <span className="absolute top-0 left-0 mt-3">
            <Circle size={5} fill={"#2dc100"} stroke={"#2dc100"} />
          </span>
        )}

        <img
          src={image}
          alt="avatar"
          className="rounded-full w-8 h-8 object-cover md:w-10 md:w-10"
        />
      </div>

      <div className="w-4/6 px-3">
        <p className="font-medium text-base">{name}</p>
        <p className="text-xs text-gray-500 truncate">{chat}</p>
      </div>

      <div className="flex w-1/6 flex-col items-end">
        <MoreHorizontal size={18} />
        <span
          className={`text-xs	${active ? "text-gray-200" : "text-gray-600"}`}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

const FriendList = () => {
  return (
    <div className="friend-list w-3/12 overflow-auto hidden lg:block xl:block">
      <div className="relative px-4 h-16 flex items-center">
        <div className="absolute pin-r pin-t  mr-3 ml-3">
          <Search color={"white"} size={18} />
        </div>
        <input
          type="search"
          className="bg-gray-700 border-0 w-full focus:outline-none text-gray-400 placeholder-gray-600 pl-10 bg-gray-200 rounded-full p-2"
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
            active={user.name === "Kristen Mckellar"}
            isOnline={user.isOnline}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
