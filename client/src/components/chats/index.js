import React from "react";
import "./chats.scss";
import defaultProfile from "assets/dfp.png";
import assistantProfile from "assets/bot.png";

export const Chats = ({ storage, chatLog }) => {
  return (
    <main>
      {!storage ? (
        <div className="required_key">
          <p>
            You need an API key to use ChatGPT <br /> Head on to the{" "}
            <a href="https://openai.com" target="blank">
              OpenAI Website
            </a>{" "}
            to get your API key
          </p>
        </div>
      ) : chatLog.length === 0 ? (
        <div className="create_chat">
          <div>
            <p>Create a new chat</p>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="25"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
      ) : (
        chatLog?.map((chat, id) => (
          <div
            key={id}
            className={`main_content ${
              chat.role === "user" ? "user" : "assistant"
            }`}
          >
            <div
              className={`chat flex ${
                chat.role === "assistant" ? "items-center" : ""
              }`}
            >
              <img
                src={chat.role === "user" ? defaultProfile : assistantProfile}
                className="user_profile"
                alt={chat.role === "user" ? "user" : "assistant"}
              />

              {/* {isLoading ? (
                <div className="loading"></div>
              ) : ( */}
              <p>{chat.message}</p>
              {/* )} */}
            </div>
          </div>
        ))
      )}
    </main>
  );
};
