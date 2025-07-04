const fs = require("fs");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function refactorCode(code) {
  const prompt = fs.readFileSync("prompts/refactorPrompt.txt", "utf-8") + "\n\n" + code;

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const result = await model.generateContent([prompt]);
  const response = await result.response;
  const text = await response.text();

  return text;
}

module.exports = { refactorCode };
