import React from "react";
import { Menu } from "react-feather";

import whatsapp from "./assets/whatsapp.png";
import messenger from "./assets/messenger.png";
import viber from "./assets/viber.png";
import skype from "./assets/skype.png";
import nimbuzz from "./assets/nimbuzz.png";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col items-center pl-2">
      <div className="p-4">
        <Menu color={"white"} />
      </div>

      <button className="p-4">
        <img src={whatsapp} alt="whatsapp" />
      </button>
      <button className="p-4 active">
        <img src={messenger} alt="messenger" />
      </button>
      <button className="p-4">
        <img src={viber} alt="viber" />
      </button>
      <button className="p-4">
        <img src={skype} alt="skype" />
      </button>
      <button className="p-4">
        <img src={nimbuzz} alt="nimbuzz" />
      </button>
    </div>
  );
};

export default Sidebar;
