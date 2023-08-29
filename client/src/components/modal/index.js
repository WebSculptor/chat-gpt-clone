import React, { useState } from "react";

import "./modal.scss";
import {
  CloseIcon,
  KeyIcon,
  EyeClosedIcon,
  EyeOpenedIcon,
} from "constants/icons";

export const ModalComponent = ({
  showModal,
  setShowModal,
  providedKey,
  setProvidedKey,
  savingKey,
  deletingKey,
  submitKey,
  removeKey,
}) => {
  const [typePassword, setTypePassword] = useState(true);

  return (
    <div
      className="modal_container fixed items-center justify-center"
      style={{
        display: showModal ? "flex" : "none",
      }}
    >
      <div className="overlay absolute" onClick={() => setShowModal(false)} />

      <div className="modal_content">
        <div className="modal_header flex items-center justify-between">
          <p>Settings</p>
          <CloseIcon onClick={() => setShowModal(false)} />
        </div>
        <div className="modal_body flex">
          <div className="modal_body-left flex col">
            <button className="flex items-center">
              <KeyIcon />
              <span>API Key</span>
            </button>
          </div>
          <div className="modal_body-right col">
            <h2>Enter API Key</h2>
            <p>
              This app cannot be used without an OpenAI API Key. Your API Key is
              never transferred outside of the local storage provided by your
              browser.
            </p>

            <div className="key_holder flex items-center">
              <KeyIcon />
              <input
                type={typePassword ? "password" : "text"}
                onChange={(e) => setProvidedKey(e.target.value)}
                value={providedKey}
                placeholder="xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx"
              />
              <span onClick={() => setTypePassword(!typePassword)}>
                {typePassword ? <EyeClosedIcon /> : <EyeOpenedIcon />}
              </span>
            </div>

            <p>
              Once you've created your API key on the{" "}
              <a href="/" target="_blank">
                OpenAI
              </a>{" "}
              website by logging in, go back to the app and paste it in the
              input form.
            </p>

            <div className="button_holder flex justify-end">
              <button
                onClick={submitKey}
                disabled={savingKey}
                type="submit"
                className="save"
              >
                {savingKey ? "Saving..." : "Save"}
              </button>

              <button
                onClick={removeKey}
                disabled={!providedKey.trim() || deletingKey}
                type="submit"
                className="delete"
              >
                {deletingKey ? "Clearing..." : "Clear"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
