import React from "react";
import { Bell, ChevronDown, MoreHorizontal, Circle } from "react-feather";

import kristen from "./assets/kristen.jpg";
import messenger from "./assets/messenger.png";

const Item = ({ label, value }) => {
  return (
    <div className="flex border-b border-gray-300 py-4 justify-between text-sm flex-col lg:flex-row">
      <p className="font-medium">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  );
};

const Profile = ({ user = {} }) => {
  const info = user.info;
  return (
    <div className="profile lg:w-3/12 sm:w-3/12 md:3/12 hidden sm:block overflow-auto">
      <div className="flex justify-between items-center border-b border-gray-300 h-16 px-4">
        <button
          type="button"
          class="inline-flex relative items-center justify-center w-12 h-12 rounded-full transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <span className="absolute top-0 left-0 ml-2 mt-2">
            <Circle size={8} fill={"#0084ff"} stroke={"#0084ff"} />
          </span>
          <Bell />
        </button>
        <button className="inline-flex items-center text-sm text-gray-600 focus:outline-none py-2">
          Matt Thompson
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="border-b border-gray-300">
        <div className="flex justify-between py-2 px-4 items-center">
          <img src={messenger} alt="messenger" className="w-4 h-4" />
          <button className="inline-flex items-center text-sm text-gray-600 focus:outline-none py-2">
            <MoreHorizontal size={20} />
          </button>
        </div>
        <div className="py-2 flex flex-col items-center">
          <img
            src={info.image}
            alt="avatar"
            className="rounded-full w-24 h-24 object-cover mb-4"
          ></img>
          <h3 className="text-2xl font-medium text-center">{info.name}</h3>
          <p className="text-gray-600">{info.place}</p>
        </div>
      </div>

      <div className="px-6 py-3">
        <Item label="Nickname:" value={info?.nickName} />
        <Item label="Tel:" value={info?.tel} />
        <Item label="Date of Birth:" value={info?.dob} />
        <Item label="Gender :" value={info?.gender} />
        <Item label="Language :" value={info?.language} />
      </div>
    </div>
  );
};

export default Profile;
