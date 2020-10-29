import React from "react";
import { Menu } from "react-feather";

import whatsapp from "./assets/whatsapp.png";
import messenger from "./assets/messenger.png";
import viber from "./assets/viber.png";
import skype from "./assets/skype.png";
import nimbuzz from "./assets/nimbuzz.png";

const SidebarItem = ({ image, name, active }) => {
  return (
    <button
      className={`p-4 hover:bg-gray-800 focus:outline-none ${
        active && "active"
      }`}
    >
      <img src={image} alt={name} />
    </button>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col items-center pl-2">
      <button className="p-4 focus:outline-none">
        <Menu color={"white"} />
      </button>

      <SidebarItem image={whatsapp} name="whatsapp" />
      <SidebarItem image={messenger} name="messenger" active={true} />
      <SidebarItem image={viber} name="viber" />
      <SidebarItem image={skype} name="skype" />
      <SidebarItem image={nimbuzz} name="nimbuzz" />
    </div>
  );
};

export default Sidebar;
