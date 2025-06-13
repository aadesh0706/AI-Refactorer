const { runWatcher } = require("./repoWatcher");
const { refactorCode } = require("./geminiRefactor");

runWatcher().catch(err => {
  console.error("❌ Error:", err);
});
