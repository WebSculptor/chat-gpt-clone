import React from "react";
import "./chats.scss";
import defaultProfile from "assets/dfp.png";
import assistantProfile from "assets/bot.png";
import { Loader, NoChat, EditorWindow } from "components";

const Logs = ({ chat, contentArray }) => {
  return (
    <div
      className={`main_content ${chat.role === "user" ? "user" : "assistant"}`}
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

        <div className="content">
          {chat?.content === "Loading..." ? (
            <Loader />
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
                  <EditorWindow
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
      </div>
    </div>
  );
};

export const Chats = ({ chatLog, setPrompt }) => {
  React.useEffect(() => {
    document.querySelector("main").scrollTop =
      document.querySelector("main").scrollHeight;
  }, [chatLog]);

  const getKey = localStorage.getItem("apiKey");

  return (
    <main>
      {!getKey ? (
        <p>No API key</p>
      ) : chatLog.length <= 0 ? (
        <NoChat setPrompt={setPrompt} />
      ) : (
        chatLog?.map((chat, id) => {
          const backticksRegex = /```([^`]*)```/g;
          const contentArray = chat.content.split(backticksRegex);

          return <Logs key={id} chat={chat} contentArray={contentArray} />;
        })
      )}
    </main>
  );
};

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="required_key">
        <p>
          To use this app, you must first obtain an API key. Go to the{" "}
          <Link to="https://openai.com/">OpenAI</Link> website, create an
          account, and copy your API key. Then, go to the settings and paste it
          there.
        </p>
      </div>  */
}
