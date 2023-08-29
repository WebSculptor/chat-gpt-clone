import React from "react";

import "./notify.scss";

export const NotifyComponent = ({ setShowModal }) => {
  return (
    <div className="notify_container">
      <div className="notify_content flex col">
        <h1>Welcome to ChatGPT</h1>
        <p>
          To use this app, you must first obtain an API key. Go to the{" "}
          <a href="https://openai.com/" target="_blank" rel="noreferrer">
            OpenAI
          </a>{" "}
          website, create an account, and copy your API key. Then, go to the
          settings and paste it there.
        </p>
        <p>Or click on the button below to open settings</p>
        <button onClick={() => setShowModal(true)}>Enter API Key</button>
      </div>
    </div>
  );
};
