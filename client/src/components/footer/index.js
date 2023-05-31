import React from "react";
import "./footer.scss";
import { LoaderIcon } from "react-hot-toast";

export const Footer = ({
  storage,
  setChatLog,
  chatLog,
  isLoading,
  setIsLoading,
}) => {
  const [prompt, setPrompt] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (prompt) {
      setIsLoading(true);
      setPrompt("");
      setChatLog([...chatLog, { role: "user", message: `${prompt}` }]);

      try {
        const res = await fetch("http://localhost:1400/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: chatLog.map((message) => message.message).join(""),
          }),
        });

        setIsLoading(false);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    storage && (
      <footer className="fixed">
        <div className="footer_container">
          <form onSubmit={handleSubmit} className="form_control">
            <input
              disabled={isLoading}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Send a message..."
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <LoaderIcon
                  style={{
                    cursor: isLoading ? "var(--not-allowed)" : "var(--pointer)",
                  }}
                />
              ) : (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="16"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
          </form>
          <p>
            <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes">
              ChatGPT Mar 23 Version.
            </a>{" "}
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts
          </p>
        </div>
      </footer>
    )
  );
};
