import React from "react";
import "./aside.scss";
import { toast } from "react-hot-toast";

export const Aside = ({ show, setShow, chatHistory, setChatLog, setTitle }) => {
  const [type, setType] = React.useState(false);
  const [secretKey, setSecretKey] = React.useState("");

  const getKey = localStorage.getItem("apiKey");

  const handleSubmitKey = (e) => {
    e.preventDefault();

    if (!secretKey) {
      toast.error("No Key added");
      return;
    } else {
      setType(false);
      toast.success("Added successfully");
      localStorage.setItem("apiKey", secretKey);
      postAPIKey();
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const postAPIKey = React.useCallback(async () => {
    await fetch("http://localhost:7000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: secretKey || getKey,
      }),
    });
  });

  const removeKey = () => {
    localStorage.removeItem("apiKey");
    setSecretKey("");
    toast.success("Removed successfully");
    return;
  };

  React.useEffect(() => {
    getKey && postAPIKey();
    getKey && setSecretKey(getKey);
  }, [getKey, postAPIKey]);

  return (
    <aside className={show ? "show_aside" : ""}>
      <div className="aside_container flex col justify-between">
        <div className="aside_container-top">
          <button
            onClick={() => {
              setShow(false);
              setChatLog([]);
              setTitle("");
            }}
            className="flex items-center"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="17"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <p>New chat</p>
          </button>
          <ul className="flex col">
            {chatHistory.length === 0 ? (
              <div className="no_chat">
                <p>Not chat yet</p>
              </div>
            ) : (
              chatHistory.map((title, uid) => (
                <li
                  className="flex items-center"
                  onClick={() => setShow(false)}
                  key={uid}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <p>{title.title}</p>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="aside_container-bottom">
          {/* Clear chat */}
          <li className="flex items-center">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="17"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <p>Clear conversations</p>
          </li>

          {/* API Key */}
          <li className="flex items-center">
            {/* key */}
            {secretKey ? (
              <svg
                viewBox="0 0 16 16"
                fill="none"
                strokeWidth="2"
                onClick={handleSubmitKey}
              >
                <path
                  d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height="17"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>
            )}

            <form onSubmit={handleSubmitKey}>
              <input
                placeholder="Add key"
                type={type ? "text" : "password"}
                onChange={(e) => setSecretKey(e.target.value)}
                value={secretKey}
              />
            </form>

            <div onClick={() => setType(!type)}>
              {type ? (
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  height="17"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  height="17"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </div>
          </li>

          {/* Remove Key */}
          <li className="flex items-center" onClick={removeKey}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="17"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <p>Remove API Key</p>
          </li>
        </div>

        <div
          className="close items-center justify-center"
          onClick={() => setShow(false)}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="22"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </aside>
  );
};
