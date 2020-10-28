import Chat from "./Chat";
import FriendList from "./FriendList";
import Menu from "./Menu";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

import "./App.css";
import "./tailwind.output.css";

const App = () => (
  <div className="flex app">
    <Sidebar />
    <div className="flex w-full">
      <Menu />
      <FriendList />
      <Chat />
      <Profile />
    </div>
  </div>
);

export default App;
