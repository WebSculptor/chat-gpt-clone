export const getApiKey = () => {
  const apiKey = localStorage.getItem("apiKey");

  return apiKey;
};

export const getPrevChats = () => {
  const chatLog = localStorage.getItem("chatLog");

  return chatLog;
};
