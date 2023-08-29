import React from "react";

import "./aside.scss";
import {
  ChatTitleIcon,
  MenuIcon,
  NewChatIcon,
  ClearChatIcon,
  SettingsIcon,
  CloseIcon,
} from "constants/icons";

export const AsideComponent = ({
  setShowModal,
  clearConversation,
  providedKey,
  toggleMenu,
  setToggleMenu,
}) => {
  return (
    <aside className={`${toggleMenu ? "show_menu" : ""}`}>
      <div className="aside_wrapper flex col relative">
        <NewChatComponent />
        {providedKey && <ChatTitleComponent />}
        <div className="aside_footer flex col">
          <button
            className="flex items-center"
            onClick={() => setShowModal(true)}
          >
            <SettingsIcon />
            <span>Settings</span>
          </button>
          <button
            className="flex items-center"
            disabled={!providedKey}
            onClick={clearConversation}
          >
            <ClearChatIcon />
            <span>Clear conversation</span>
          </button>
        </div>
        <div
          className="close_menu absolute items-center justify-center"
          onClick={() => setToggleMenu(false)}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="aside_overlay" onClick={() => setToggleMenu(false)} />
    </aside>
  );
};

const NewChatComponent = () => {
  return (
    <div className="aside_header flex items-center">
      <button className="flex items-center">
        <NewChatIcon />
        <span>New chat</span>
      </button>
      <button className="collapse">
        <MenuIcon />
      </button>
    </div>
  );
};

const ChatTitleComponent = () => {
  const titles = ["Title not functional"];

  return (
    <div className="aside_body flex col">
      <p>Today</p>
      {titles.map((_, _key) => (
        <button className="flex items-center" key={_key}>
          <ChatTitleIcon />
          <span className="collapse">{_}</span>
        </button>
      ))}
    </div>
  );
};
