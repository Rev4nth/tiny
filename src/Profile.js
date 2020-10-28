import React from "react";
import { Bell, ChevronDown, MoreHorizontal } from "react-feather";

import avatar from "./avatar.jpeg";

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
    <div className="flex border-b border-gray-300 py-4 justify-between">
      <p className="font-medium">{label}</p>
      <p>{value}</p>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="profile w-2/12">
      <div className="flex justify-between p-4 border-b border-gray-300">
        <Bell />
        <div className="flex items-center">
          <p className="mr-1">Matt Thompson</p>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="border-b border-gray-300">
        <div className="flex justify-end py-2 px-4">
          <MoreHorizontal />
        </div>
        <div className="py-4 flex flex-col items-center">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full w-1/2 mb-4"
          ></img>
          <h3 className="text-2xl font-medium">Kirsten Mckellar</h3>
          <p>Cape Town, RSA</p>
        </div>
      </div>

      <div className="p-6">
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
