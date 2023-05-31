import React from "react";
import { Chats, Footer, Aside, Header, Popup } from "components";

export const App = () => {
  const [show, setShow] = React.useState(false);
  const [openPopup, setOpenPopup] = React.useState(false);
  const [chatLog, setChatLog] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const storage = JSON.parse(localStorage.getItem("apiKey"));

  return (
    <>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        storage={storage}
      />
      <Header setShow={setShow} show={show} />
      <Aside
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        setShow={setShow}
        show={show}
        storage={storage}
      />
      <Chats setIsLoading={setIsLoading} storage={storage} chatLog={chatLog} />
      <Footer
        storage={storage}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        chatLog={chatLog}
        setChatLog={setChatLog}
      />
    </>
  );
};
