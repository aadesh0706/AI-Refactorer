# 🤖 AI-Refactorer

**AI-Refactorer** is a cutting-edge AI-powered tool that automatically refactors your JavaScript code to make it cleaner, more modern, and more maintainable — using Google's **Gemini API**.

It watches for changes in your repo, sends code to Gemini with smart prompts, and commits back the refactored code with explanations. All from your terminal!

---

## 🚀 Features

- 🔍 Detects changed `.js` files in your Git repo  
- 🤖 Uses Google Gemini to rewrite and optimize code  
- 🧠 Explains refactor changes in commit messages  
- 💡 Uses `.gitignore` to protect secrets like API keys  
- ⚙️ Built with Node.js, Gemini SDK, and Git automation  

---

## 📁 Folder Structure

```
AI-Refactorer/
├── geminiRefactor.js         # Talks to Gemini API
├── repoWatcher.js            # Detects changes and triggers refactor
├── gitUtils.js               # Git commands: get changed files, auto-commit
├── prompts/
│   └── refactorPrompt.txt    # Refactor instructions for Gemini
├── index.js                  # Entry point
├── .gitignore                # Ignore sensitive files like .env
├── .env                      # Stores your Gemini API key (excluded from Git)
└── README.md                 # You're reading it!
```

---

## 🧠 How It Works

1. You make a commit with new or modified `.js` files  
2. `AI-Refactorer` detects the changed files  
3. Sends the original code + prompt to Gemini  
4. Receives:  
   - Refactored version of the code  
   - Explanation of changes  
5. Overwrites the file and auto-commits with the explanation  

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/aadesh0706/AI-Refactorer.git
cd AI-Refactorer
npm install
```

---

## 🔑 Set Up Gemini API Key

1. Go to: [Google MakerSuite](https://makersuite.google.com/app/apikey)  
2. Create or copy your API key  
3. Create a `.env` file in the root:

```env
GEMINI_API_KEY=your-api-key-here
```

✅ `.env` is already included in `.gitignore` — so it won't be pushed to GitHub.

---

## 📜 Sample Prompt (`prompts/refactorPrompt.txt`)

```
You're a skilled developer. Refactor this code:
- Improve readability and structure
- Use modern JavaScript syntax
- Maintain original functionality

Output format:
```js
// Refactored Code
<code>

// Explanation
<explanation>
```
```

---

## 🛠️ Usage

Make some changes to a `.js` file in your repo, then commit.

Run the tool with:

```bash
node index.js
```

Example output:

```
✅ Refactored and committed: utils/helpers.js
```

---

## 🧪 Example

**Before:**
```js
function sayHello(name){
console.log("Hello "+name)
}
```

**After:**
```js
// Refactored Code
const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

// Explanation
Converted function to arrow function and used template literals for cleaner syntax.
```

---

## 🔐 GitHub Push Protection (Important)

If you accidentally commit `.env`, GitHub will block the push.

**Fix it:**

```bash
npx git-remove-history .env
git push origin --force
```

Always keep `.env` in `.gitignore`!

---

## 🧭 Roadmap

- [ ] Add diff viewer (before/after)  
- [ ] Visual HTML dashboard for code reviews  
- [ ] VS Code extension integration  
- [ ] Refactor quality scoring (e.g., ESLint score)  
- [ ] Auto test execution before commits  

---

## 🤝 Contributing

We welcome contributors!

```bash
# Fork & clone this repo
git checkout -b feature/amazing-idea
# Make changes and commit
git push origin feature/amazing-idea
# Open a pull request!
```

---

## 📜 License

This project is licensed under the MIT License.  
Feel free to use it, improve it, and make it your own.

---

## 🙌 Acknowledgements

- Built using Google Gemini API  
- Inspired by developers who love clean code and hate repetition

---

## 👤 Author

**Aadesh Gulumbe**  
💼 Portfolio: [aadeshgulumbe.me](https://aadeshgulumbe.me)  
🐙 GitHub: [@aadesh0706](https://github.com/aadesh0706)  
📧 Email: aadeshgulumbe3@gmail.com

> ⭐ Star this repo if it helped or impressed you!
