import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();
const app = express();
const port = 1400;
const msg = `Server is running on http://localhost:${port}/`;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: msg,
  });
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const key = "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";

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      message: [{ role: "user", content: message }],
      max_tokens: 100,
    }),
  };

  console.log(key);

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.listen(port, () => console.log(msg));
