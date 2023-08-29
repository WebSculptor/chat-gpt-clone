import React from "react";

import "./chat.scss";
import {
  EmptyChatComponent,
  ThinkingComponent,
  EditorWindowComponent,
} from "components";
import { CopyIcon, CopiedIcon, UserIcon, AssistantIcon } from "constants/icons";

export const ChatComponent = ({ setPrompts, chatLog }) => {
  return (
    <div className="conversations flex col">
      {chatLog?.length === 0 ? (
        <EmptyChatComponent setPrompts={setPrompts} />
      ) : (
        chatLog?.map((chat, _key) => {
          const backticksRegex = /```([^`]*)```/g;
          const contentArray = chat?.content.split(backticksRegex);

          return (
            <ChatLogSettings
              key={_key}
              chat={chat}
              contentArray={contentArray}
            />
          );
        })
      )}
    </div>
  );
};

const ChatLogSettings = ({ chat, contentArray }) => {
  return (
    <div
      className={`message_container ${
        chat?.role === "user" ? "user" : "assistant"
      }`}
    >
      <div className="message flex items-start">
        <div className="message_avatar flex items-center justify-center">
          {chat?.role === "user" ? <UserIcon /> : <AssistantIcon />}
        </div>
        <div className="message_content">
          {chat?.content === "Loading..." ? (
            <ThinkingComponent />
          ) : (
            contentArray?.map((code, index) => {
              return index % 2 === 1 ? (
                <div className="code_block flex col" key={index}>
                  <div className="code_block-header flex items-center justify-between">
                    <div className="buttons flex items-center">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>{"js"}</p>
                  </div>
                  <EditorWindowComponent
                    code={code}
                    language={
                      "javascript" || "jsx" || "python" || "css" || "html"
                    }
                  />
                </div>
              ) : (
                <span key={index}>{code}</span>
              );
            })
          )}
        </div>
        {/* {chat?.role === "assistant" && chat?.content !== "Loading..." && (
          <button className="flex items-center justify-center">
            {!isCopy ? <CopyIcon /> : <CopiedIcon />}
          </button>
        )} */}
      </div>
    </div>
  );
};
