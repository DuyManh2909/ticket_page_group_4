import "dotenv/config";
import express from "express";
import cors from "cors";
import Groq from "groq-sdk";

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Tin nhắn không được để trống" });
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Bạn là trợ lý bán vé concert chuyên nghiệp cho Beatsync. Thanh toán bằng số tài khoản 3229092008 MBBank",
        },
        {
          role: "user",
          content: message,
        },
      ],

      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    const reply =
      chatCompletion.choices[0]?.message?.content ||
      "Xin lỗi, tôi không thể trả lời lúc này.";

    res.json({ reply: reply });
  } catch (err) {
    console.error("Lỗi Groq:", err);
    res.status(500).json({
      error: "Lỗi hệ thống AI",
      detail: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server Groq chạy ở http://localhost:3000");
});
