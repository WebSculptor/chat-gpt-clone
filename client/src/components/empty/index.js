import React from "react";

import "./empty.scss";
import { defaultData } from "constants";

export const EmptyChatComponent = ({ setPrompts }) => {
  return (
    <div className="empty_chat-container">
      <div className="empty_content flex col items-center justify-between">
        <h1>ChatGPT</h1>
        <div className="card_grid grid">
          {defaultData?.map((data, _key) => (
            <div
              key={_key}
              className="card flex col"
              title={data.value}
              onClick={() => setPrompts(data.value)}
            >
              <p>{data.top}</p>
              <span>{data.bottom}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
