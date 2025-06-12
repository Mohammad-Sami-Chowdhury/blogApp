const axios = require("axios");

exports.generateDescription = async (req, res) => {
  const { title } = req.body;
  try {
    console.log("AI request received:", title);
    // OpenAI API call (replace with your API key and endpoint)
    const aiRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a blog writer." },
          { role: "user", content: `Write a blog description for: ${title}` },
        ],
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `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`,
        },
      }
    );
    console.log("AI response:", aiRes.data);
    const description = aiRes.data.choices[0].message.content;
    res.json({ description });
  } catch (err) {
    res.status(500).json({ message: "AI failed", error: err.message });
  }
};
