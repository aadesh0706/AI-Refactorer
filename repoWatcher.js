const fs = require("fs");
const path = require("path");
const { refactorCode } = require("./geminiRefactor");
const { getChangedFiles, autoCommit } = require("./gitUtils");

async function runWatcher() {
  try {
    const files = await getChangedFiles();

    if (!files.length) {
      console.log("📭 No JavaScript files changed in the last commit.");
      return;
    }

    for (const file of files) {
      const fullPath = path.join(__dirname, file);

      if (!fs.existsSync(fullPath)) {
        console.warn(`⚠️ File not found: ${fullPath}`);
        continue;
      }

      const original = fs.readFileSync(fullPath, "utf-8");
      const result = await refactorCode(original);

      if (!result || !result.includes("// Refactored Code")) {
        console.error(`❌ Invalid response from Gemini for ${file}`);
        continue;
      }

      const [newCode, explanation] = result.split("// Explanation");

      if (!newCode) {
        console.error(`❌ Could not parse refactored code for ${file}`);
        continue;
      }

      fs.writeFileSync(fullPath, newCode.trim());

      await autoCommit(file, (explanation || "Refactored with AI").trim());
      console.log(`✅ Refactored and committed: ${file}`);
    }
  } catch (err) {
    console.error("❌ Unexpected error:", err.message);
  }
}

module.exports = { runWatcher };
