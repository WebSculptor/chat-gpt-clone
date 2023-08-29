import React from "react";

import "./home.scss";
import { UploadIcon, BarIcon, CloseIcon } from "constants/icons";
import { ChatComponent, NotifyComponent } from "components";
import { LoaderIcon } from "react-hot-toast";

export const HomePage = ({
  prompts,
  setPrompts,
  isSending,
  sendMessage,
  savedKey,
  chatLog,
  toggleMenu,
  setToggleMenu,
  setShowModal,
}) => {
  return (
    <div className="home_container relative">
      <div className="conversation_header fixed flex items-center justify-between">
        <div
          className="hamburger flex items-center justify-center"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? <CloseIcon /> : <BarIcon />}
        </div>
        <p>Default (GPT-3.5)</p>
        <UploadIcon />
      </div>
      {savedKey ? (
        <React.Fragment>
          <ChatComponent setPrompts={setPrompts} chatLog={chatLog} />
          <div className="form_container fixed flex col items-center">
            <div className="input_container">
              <form onSubmit={sendMessage} className="input_holder relative">
                <textarea
                  placeholder={
                    isSending ? "ChatGPT is typing..." : "Send a message"
                  }
                  onChange={(e) => setPrompts(e.target.value)}
                  value={prompts}
                  disabled={isSending}
                />
                <button
                  className="absolute flex items-center justify-center"
                  disabled={!prompts.trim() || isSending}
                >
                  {isSending ? (
                    <LoaderIcon />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      strokeWidth="2"
                    >
                      <path
                        d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  )}
                </button>
              </form>
            </div>
            <p>
              Free Research Preview. ChatGPT may produce inaccurate information
              about people, places, or facts.{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
              >
                ChatGPT August 3 Version
              </a>
            </p>
          </div>
        </React.Fragment>
      ) : (
        <NotifyComponent setShowModal={setShowModal} />
      )}
    </div>
  );
};
