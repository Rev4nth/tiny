import React from "react";
import { Bell, ChevronDown, MoreHorizontal } from "react-feather";

import kristen from "./assets/kristen.jpg";

const user = {
  info: {
    nickName: "Killa Kella",
    tel: "072 143 9920",
    dob: "July 12, 1988",
    gender: "Female",
    language: "English",
  },
};

const Item = ({ label, value }) => {
  return (
    <div className="flex border-b border-gray-300 py-4 justify-between text-sm">
      <p className="font-medium">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="profile w-3/12">
      <div className="flex justify-between items-center border-b border-gray-300 h-16 px-4">
        <button
          type="button"
          class="inline-flex items-center justify-center w-12 h-12 rounded-full transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <Bell />
        </button>
        <button className="inline-flex items-center text-sm text-gray-600 focus:outline-none py-2">
          Matt Thompson
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="border-b border-gray-300">
        <div className="flex justify-end py-2 px-4">
          <button className="inline-flex items-center text-sm text-gray-600 focus:outline-none py-2">
            <MoreHorizontal size={20} />
          </button>
        </div>
        <div className="py-2 flex flex-col items-center">
          <img
            src={kristen}
            alt="avatar"
            className="rounded-full w-24 h-24 object-cover mb-4"
          ></img>
          <h3 className="text-2xl font-medium">Kirsten Mckellar</h3>
          <p className="text-gray-600">Cape Town, RSA</p>
        </div>
      </div>

      <div className="px-6 py-3">
        <Item label="Nickname:" value={user.info.nickName} />
        <Item label="Tel:" value={user.info.tel} />
        <Item label="Date of Birth:" value={user.info.dob} />
        <Item label="Gender :" value={user.info.gender} />
        <Item label="Language :" value={user.info.language} />
      </div>
    </div>
  );
};

export default Profile;
