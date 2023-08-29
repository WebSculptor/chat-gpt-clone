import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 8001;
const msg = `Welcome ${port}`;

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { message, apiKey } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    res.status(200).send(error);
    console.log("Error: " + error);
  }
});

const handleStartup = () => {
  try {
    app.listen(port, () => {
      console.log(msg);
    });
  } catch (error) {
    console.log(error);
  }
};

handleStartup();
