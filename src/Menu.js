import React from "react";
import { User } from "react-feather";

const MenuItem = ({ label, value, active }) => {
  return (
    <button
      className={`flex justify-between p-2 text-sm w-full focus:outline-none hover:bg-gray-700 rounded ${
        active && "bg-gray-700"
      }`}
    >
      <p className="text-gray-400">{label}</p>
      {value && <p className="font-medium"> {value}</p>}
    </button>
  );
};

const Menu = () => {
  return (
    <div className="menu w-2/12 text-white px-6">
      <div className="flex justify-between py-4 pl-2 items-center h-16">
        <h2 className="text-2xl font-medium">Inbox</h2>
        <button className="focus:outline-none p-2 border border-gray-600 text-center rounded-full">
          <User size={14} />
        </button>
      </div>

      <div className="pb-5 border-b border-gray-600">
        <MenuItem label="All Messages" value={21} />
        <MenuItem label="Unread" value={89} active={true} />
        <MenuItem label="Important" value={6} />
        <MenuItem label="Drafts" value={27} />
      </div>

      <div className="py-5 border-b border-gray-600">
        <MenuItem label="Teams" value={4} />
        <MenuItem label="Groups" value={3} />
        <MenuItem label="Channels" value={18} />
        <MenuItem label="Locations" />
        <MenuItem label="Media" value={120} />
      </div>

      <div className="py-5">
        <MenuItem label="Help" />
        <MenuItem label="Settings" />
      </div>
    </div>
  );
};

export default Menu;
