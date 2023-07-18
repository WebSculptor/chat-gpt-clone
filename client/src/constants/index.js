export const generateRandomId = (length) => {
  const numbers = "0123456789";
  const lowerCase = "abcdefghijnlmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const charset = numbers + lowerCase + upperCase;

  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    id += charset[randomIndex];
  }
  return id;
};

export const dummyChat = [
  {
    role: "user",
    content: "Hello",
  },
  {
    role: "assistant",
    content: "Hi, how can I help you today?",
  },
  {
    role: "user",
    content:
      "So the story is about a small boy with dark complexion and a tall, cute face who lost his entire family to kidnappers (he had two younger sisters but was especially close to their last born). His life was never the same after that, and he vowed to seek vengeance, but Nigerian law does not back his allegation. On his way to vengeance, he falls in love with the daughter of the man who unwittingly murdered his family. Now he must choose between retribution and love. From the content above, Generate a title for the story and 10 chapters for it.",
  },
  {
    role: "assistant",
    content:
      "Hi, how can I help you today? Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?",
  },
  {
    role: "user",
    content: "Hello there",
  },
  {
    role: "assistant",
    content:
      "Hi, how can I help you today? Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?",
  },
  {
    role: "user",
    content: "Hello there",
  },
  {
    role: "assistant",
    content:
      "Hi, how can I help you today? Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?",
  },
  {
    role: "user",
    content: "Hello there",
  },
  {
    role: "assistant",
    content:
      "Hi, how can I help you today? Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?",
  },
  {
    role: "user",
    content: "Hello there",
  },
  {
    role: "assistant",
    content:
      "Hi, how can I help you today? Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?",
  },
  {
    role: "user",
    content: "Hello there",
  },
  {
    role: "assistant",
    content:
      "Hi, how can I help you today? Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?",
  },
  {
    role: "user",
    content: "Hello there",
  },
  {
    role: "assistant",
    content:
      "Hi, how can I help you today? Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?Hi, how can I help you today?",
  },
];
