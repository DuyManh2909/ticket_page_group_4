import Groq from "groq-sdk";

export default {
  async fetch(request, env) {
    // Chỉ cho phép POST
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const body = await request.json();
      const { message } = body;

      if (!message) {
        return Response.json(
          { error: "Tin nhắn không được để trống" },
          { status: 400 },
        );
      }

      const groq = new Groq({
        apiKey: env.GROQ_API_KEY, // ⚠️ dùng env, không phải process.env
      });

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
      });

      const reply =
        chatCompletion.choices[0]?.message?.content ||
        "Xin lỗi, tôi không thể trả lời lúc này.";

      return Response.json({ reply });
    } catch (err) {
      return Response.json(
        {
          error: "Lỗi hệ thống AI",
          detail: err.message,
        },
        { status: 500 },
      );
    }
  },
};
