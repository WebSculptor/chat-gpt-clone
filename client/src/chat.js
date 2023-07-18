import React, { useState, useEffect } from "react";

const ChatLog = ({ title, conversation }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {conversation.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

const Sidebar = ({ chatLogs, onTitleClick, onAddChatLog }) => {
  return (
    <div>
      <h2>Chat Logs</h2>
      <ul>
        {chatLogs.map((chatLog, index) => (
          <li key={index} onClick={() => onTitleClick(index)}>
            {chatLog.title}
          </li>
        ))}
      </ul>
      <button onClick={onAddChatLog}>Add Chat Log</button>
    </div>
  );
};

const ChatApp = () => {
  const [chatLogs, setChatLogs] = useState([]);

  useEffect(() => {
    // Load chat logs from local storage
    const storedChatLogs = JSON.parse(localStorage.getItem("chatLogs"));
    if (storedChatLogs) {
      setChatLogs(storedChatLogs);
    }
  }, []);

  useEffect(() => {
    // Save chat logs to local storage whenever they change
    localStorage.setItem("chatLogs", JSON.stringify(chatLogs));
  }, [chatLogs]);

  const handleTitleClick = (index) => {
    // Display the conversation when the title is clicked
    console.log(`Conversation for chat log "${chatLogs[index].title}":`);
    console.log(chatLogs[index].conversation);
  };

  const handleAddChatLog = () => {
    // Add a new chat log to the state
    const newChatLog = {
      title: `Chat Log ${chatLogs.length + 1}`,
      conversation: [
        { role: "user", message: "Hello" },
        { role: "assistant", message: "Hi, how can I assist you?" },
        { role: "user", message: "I need help with something" },
      ],
    };
    setChatLogs([...chatLogs, newChatLog]);
  };

  return (
    <div>
      <Sidebar
        chatLogs={chatLogs}
        onTitleClick={handleTitleClick}
        onAddChatLog={handleAddChatLog}
      />
      {chatLogs.map((chatLog, index) => (
        <ChatLog
          key={index}
          title={chatLog.title}
          conversation={chatLog.conversation.map(
            (message, index) => message.message
          )}
        />
      ))}
    </div>
  );
};

export default ChatApp;
