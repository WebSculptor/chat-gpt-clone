import React, { useEffect, useState } from "react";

import "./layouts.scss";
import { AsideComponent, ModalComponent } from "components";
import { HomePage } from "pages";
import { getApiKey, getPrevChats } from "utils";
import { toast } from "react-hot-toast";

export const AppLayout = () => {
  const savedKey = getApiKey();
  const prevChat = getPrevChats();
  const [prompts, setPrompts] = useState("");
  //! concerning the api key
  const [providedKey, setProvidedKey] = useState("");
  const [savingKey, setSavingKey] = useState(false);
  const [deletingKey, setDeletingKey] = useState(false);
  //! concerning the api key
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [chatLog, setChatLog] = React.useState([]);

  //! concerning the api key
  const submitKey = () => {
    setSavingKey(true);
    try {
      if (!providedKey) {
        toast.error("Please provide a key");
        setSavingKey(false);
        return;
      }
      toast.success("Added successfully");
      localStorage.setItem("apiKey", providedKey);
      setSavingKey(false);
    } catch (error) {
      toast.error("Unable to add API key");
    }
  };

  const removeKey = () => {
    setDeletingKey(true);
    try {
      localStorage.removeItem("apiKey");
      setProvidedKey("");
      toast.success("Removed successfully");
      setDeletingKey(false);
    } catch (error) {
      setDeletingKey(false);
      console.log(error);
    }
  };

  const clearConversation = () => {
    localStorage.removeItem("chatLog");
    setChatLog([]);
    toast.success("Conversation cleared");
    setToggleMenu(false);
    setPrompts("");
  };
  //! concerning the api key

  const sendMessage = async (e) => {
    e.preventDefault();
    setIsSending(true);

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      {
        role: "user",
        content: prompts,
      },
      {
        role: "assistant",
        content: "Loading...",
      },
    ]);

    try {
      const response = await fetch(
        "https://chat-gpt-server-yn56.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: prompts,
            apiKey: providedKey || savedKey,
          }),
        }
      );

      const data = await response.json();
      const result = data?.choices[0]?.message;

      // Simulate typing effect by splitting the content into characters
      const typingDelay = 10;
      for (let i = 0; i < result.content.length; i++) {
        setTimeout(() => {
          setChatLog((prevChatLog) => {
            const updatedLog = [...prevChatLog];
            updatedLog[updatedLog.length - 1].content = result.content.slice(
              0,
              i + 1
            );
            return updatedLog;
          });
        }, i * typingDelay);
      }

      setPrompts("");
    } catch (error) {
      setChatLog([
        ...chatLog,
        {
          role: "user",
          content: prompts,
        },
        {
          role: "assistant",
          content: error.message,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const homeProps = {
    savedKey,
    prompts,
    setPrompts,
    isSending,
    setIsSending,
    chatLog,
    setChatLog,
    toggleMenu,
    setToggleMenu,
    setShowModal,
    sendMessage,
  };

  const modalProps = {
    showModal,
    setShowModal,
    providedKey,
    setProvidedKey,
    savingKey,
    deletingKey,
    removeKey,
    submitKey,
  };

  // Save chatLog to localStorage with debouncing
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      localStorage.setItem("chatLog", JSON.stringify(chatLog));
    }, 500); // Adjust the debounce timeout as needed (e.g., 500 milliseconds)

    return () => clearTimeout(debounceTimeout);
  }, [chatLog]);

  useEffect(() => {
    savedKey && setProvidedKey(savedKey);
    prevChat && setChatLog(JSON.parse(prevChat));
  }, [savedKey, prevChat]);

  useEffect(() => {
    document.querySelector("main").scrollTop =
      document.querySelector("main").scrollHeight;
  }, [chatLog]);

  return (
    <div className="app_container flex">
      <ModalComponent {...modalProps} />
      <AsideComponent
        setShowModal={setShowModal}
        clearConversation={clearConversation}
        providedKey={providedKey}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <main>
        <HomePage {...homeProps} />
      </main>
    </div>
  );
};
