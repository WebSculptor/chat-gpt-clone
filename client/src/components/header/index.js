import React from "react";
import "./header.scss";

export const Header = ({ show, setShow }) => {
  return (
    <header className="fixed">
      <nav className="flex items-center justify-between">
        <div className="menu" onClick={() => setShow(!show)}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="25"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>

        <p>...</p>

        <div className="new__chat">
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
      </nav>
    </header>
  );
};
