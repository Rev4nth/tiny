import React from "react";
import { User } from "react-feather";

const MenuItem = ({ label, value }) => {
  return (
    <div className="flex justify-between p-2">
      <p className="text-gray-300">{label}</p>
      {value && <p>{value}</p>}
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu w-2/12 text-white px-6">
      <div className="flex justify-between py-4 items-center">
        <h2 className="text-2xl font-medium">Inbox</h2>
        <div className="p-2 border border-white text-center rounded-full">
          <User size={16} />
        </div>
      </div>

      <div className="mb-2">
        <MenuItem label="All Messages" value={21} />
        <MenuItem label="Unread" value={89} />
        <MenuItem label="Important" value={6} />
        <MenuItem label="Drafts" value={27} />
      </div>

      <hr className="divide-white" />

      <div className="mb-2">
        <MenuItem label="Teams" value={4} />
        <MenuItem label="Groups" value={3} />
        <MenuItem label="Channels" value={18} />
        <MenuItem label="Locations" />
        <MenuItem label="Media" value={120} />
      </div>

      <hr className="divide-white" />

      <div className="mb-2">
        <MenuItem label="Help" />
        <MenuItem label="Settings" />
      </div>
    </div>
  );
};

export default Menu;
