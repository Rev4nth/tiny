import Chat from "./Chat";
import FriendList from "./FriendList";
import Menu from "./Menu";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

import "./App.css";
import "./tailwind.output.css";

import users from "./data";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(users["Kristen Mckellar"]);

  const handleClick = (name) => {
    setUser(users[name]);
  };

  return (
    <div className="flex app">
      <Sidebar />
      <div className="flex w-full">
        <Menu />
        <FriendList handleClick={handleClick} user={user} />
        <Chat user={user} />
        <Profile user={user} />
      </div>
    </div>
  );
};

export default App;
