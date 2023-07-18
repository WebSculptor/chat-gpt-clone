import React from "react";
import "./noChat.scss";

export const NoChat = ({ setPrompt }) => {
  const examples = [
    "Explain quantum computing in simple terms",
    "Got any creative ideas for a 10 year old’s birthday?",
    "How do I make an HTTP request in Javascript?",
  ];

  return (
    <div className="no_chat flex col items-center justify-center">
      <h1>ChatGPT</h1>

      <div className="options_container grid">
        <div className="options_col">
          <div className="options_content">
            <div className="options_top">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sun"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
              <p>Examples</p>
            </div>

            {examples.map((example, uid) => (
              <div
                className="option select_option"
                key={uid}
                onClick={() => setPrompt(example)}
              >
                <q>{example}</q>
              </div>
            ))}
          </div>
        </div>

        <div className="options_col">
          <div className="options_content">
            <div className="options_top">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>

              <p>Capabilities</p>
            </div>

            <div className="option">
              <p>Remembers what user said earlier in the conversation</p>
            </div>
            <div className="option">
              <p>Allows user to provide follow-up corrections</p>
            </div>
            <div className="option">
              <p>Trained to decline inappropriate requests</p>
            </div>
          </div>
        </div>

        <div className="options_col">
          <div className="options_content">
            <div className="options_top">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>

              <p>Limitations</p>
            </div>

            <div className="option">
              <p>May occasionally generate incorrect information</p>
            </div>
            <div className="option">
              <p>
                May occasionally produce harmful instructions or biased content
              </p>
            </div>
            <div className="option">
              <p>Limited knowledge of world and events after 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
