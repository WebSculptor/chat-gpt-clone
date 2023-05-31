import React from "react";
import "./popup.scss";
import { toast } from "react-hot-toast";

export const Popup = ({ setOpenPopup, openPopup, storage }) => {
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!input) {
      setIsLoading(false);
      toast.error("API Key is required");
    } else {
      sendAPI();

      setTimeout(() => {
        setIsLoading(false);
        toast.success("Added successfully");
        localStorage.setItem("apiKey", JSON.stringify(input));
        setOpenPopup(false);
        console.log("Added successfully");
      }, 3000);
    }
  };

  const sendAPI = async () => {
    try {
      await fetch("http://localhost:1400/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: input,
        }),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeApiKey = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Removed successfully");
      localStorage.removeItem("apiKey");
      setInput("");
      setOpenPopup(false);
      console.log("Removed successfully");
    }, 3000);
  };

  React.useState(() => {
    if (!storage) {
      setInput("");
      console.log("You currently do not have an API key");
    } else {
      setInput(storage);
      console.log("You currently have an API key");
    }
  });

  return (
    <div
      className={`popup_container fixed flex items-center justify-center ${
        openPopup ? "open_popup" : ""
      }`}
    >
      <div className="overlay absolute" />
      <form onSubmit={handleSubmit} className="popup_content flex col">
        <div className="popup_content-input relative">
          <input
            value={input}
            type="text"
            style={{
              borderBottomColor: input.trim()
                ? "var(--success-main)"
                : "#4d4d4f",
              paddingRight: storage && input ? "4.5rem" : "1.5rem",
            }}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder="Add API key here..."
          />
          {storage && input && (
            <div onClick={removeApiKey} className="delete_key absolute">
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
            </div>
          )}
        </div>
        <div className="popup_content-btn flex justify-end">
          <button
            type="button"
            disabled={isLoading}
            onClick={() => setOpenPopup(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};
