const simpleGit = require("simple-git");
const git = simpleGit();

async function getChangedFiles() {
  const diff = await git.diff(["--name-only", "HEAD"]);
  return diff.split("\n").filter(f => f.endsWith(".js"));
}

async function autoCommit(file, explanation) {
  await git.add(file);
  await git.commit(`🤖 AI Refactored ${file} - ${explanation}`);
}

module.exports = { getChangedFiles, autoCommit };