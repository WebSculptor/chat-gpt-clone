/* eslint-disable no-undef */
import React from "react";
import "./footer.scss";
import { LoaderIcon, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export const Footer = ({
  setChatLog,
  chatLog,
  isLoading,
  setIsLoading,
  prompt,
  setPrompt,
  title,
  setTitle,
  chatHistory,
  setChatHistory,
}) => {
  const handleSubmit = async () => {
    if (prompt.trim) {
      setIsLoading(true);
      setPrompt("");
      setChatLog([
        ...chatLog,
        { role: "user", content: prompt.trim() },
        { role: "assistant", content: "Loading..." },
      ]);

      try {
        const response = await fetch("http://localhost:7000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [...chatLog, { role: "user", content: prompt.trim() }],
          }),
        });

        if (!title) {
          const createTitle = await fetch("http://localhost:7000/api/title", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: prompt,
            }),
          });

          const title = await createTitle.json();
          setTitle(title?.title);
          setChatHistory([...chatHistory, title]);
          setIsLoading(false);
        }

        const readData = response.body
          .pipeThrough(new TextDecoderStream())
          .getReader();

        let aiRes = "";
        while (true) {
          const { done, value } = await readData.read();
          if (done) {
            break;
          }

          aiRes += value;

          setChatLog([
            ...chatLog,
            { role: "user", content: prompt.trim() },
            { role: "assistant", content: aiRes },
          ]);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setTimeout(() => {
          setChatLog([
            ...chatLog,
            { role: "user", content: prompt.trim() },
            {
              role: "assistant",
              content: error.message,
            },
          ]);
        }, 1000);
      }
    } else {
      toast.error("Please enter something in the input field");
      setIsLoading(false);
    }
  };

  return (
    <footer className="fixed">
      <div className="footer_container">
        <form onSubmit={handleSubmit} className="form_control">
          <input
            disabled={isLoading}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={isLoading ? "ChatGPT is typing..." : "Send a message"}
          />
          {isLoading ? (
            <LoaderIcon
              style={{
                cursor: isLoading ? "var(--not-allowed)" : "var(--pointer)",
                marginRight: "1rem",
              }}
            />
          ) : (
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              onClick={handleSubmit}
            >
              <svg viewBox="0 0 16 16" fill="none" strokeWidth="2">
                <path
                  d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          )}
        </form>
        <p>
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts.{" "}
          <Link to="https://help.openai.com/en/articles/6825453-chatgpt-release-notes">
            ChatGPT May 24 Version
          </Link>
        </p>
      </div>
    </footer>
  );
};
