import React from "react";
import { Chats, Footer, Aside, Header } from "components";
// import { dummyChat } from "constants";

export const App = () => {
  const [apiKey, setApiKay] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");
  const [chatHistory, setChatHistory] = React.useState([]);
  const [chatLog, setChatLog] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    // Retrieve stored text from local storage
    const getKey = localStorage.getItem("apiKey");
    if (getKey) {
      setApiKay(getKey);
    }
  }, []);

  return (
    <>
      <Header setShow={setShow} show={show} title={title} />
      <Aside
        apiKey={apiKey}
        setChatLog={setChatLog}
        setChatHistory={setChatHistory}
        chatHistory={chatHistory}
        title={title}
        setTitle={setTitle}
        setShow={setShow}
        show={show}
      />
      <Chats isLoading={isLoading} chatLog={chatLog} setPrompt={setPrompt} />
      <Footer
        apiKey={apiKey}
        setApiKay={setApiKay}
        setChatHistory={setChatHistory}
        chatHistory={chatHistory}
        title={title}
        setTitle={setTitle}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        chatLog={chatLog}
        setChatLog={setChatLog}
        prompt={prompt}
        setPrompt={setPrompt}
      />
    </>
  );
};
