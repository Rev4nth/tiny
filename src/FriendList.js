import React from "react";
import { Search } from "react-feather";

const FriendList = () => {
  return (
    <div className="friend-list w-3/12">
      <div className="relative ml-6 my-2">
        <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">
          <Search />
        </div>
        <input
          type="search"
          className="bg-purple-white shadow rounded border-0 p-3"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default FriendList;
