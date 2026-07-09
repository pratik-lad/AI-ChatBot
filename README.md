# Gemini AI Chatbot

A responsive AI chatbot built using **HTML, CSS, and JavaScript** that integrates with the **Google Gemini API** to generate intelligent conversational responses in real time.

---

Project Overview

The Gemini AI Chatbot is a simple web application that allows users to chat with Google's Gemini AI model. Users can enter prompts, send messages, and receive AI-generated responses instantly through the Gemini API.

This project demonstrates API integration, asynchronous JavaScript (Fetch API), DOM manipulation, and responsive frontend design.

---

 Features

- 💬 Real-time AI conversation
- 🤖 Google Gemini API Integration
- 🎨 Responsive User Interface
- ⚡ Fast response using Fetch API
- ⌨️ Press Enter to send messages
- 🧹 Automatic Markdown cleanup
- 📱 Mobile-friendly design
- 🔄 Loading and error handling



 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Google Gemini API
- Fetch API

 Project Structure


Gemini-Chatbot/
│
├── index.html
├── styles.css
├── script.js
├── user.jpg
├── bot.jpg
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/gemini-chatbot.git
```

### 2. Open Project Folder

```bash
cd gemini-chatbot
```

### 3. Open in VS Code

Install the **Live Server** extension.

Right Click

index.html

Select

Open with Live Server


 API Key Setup

1. Visit

https://aistudio.google.com/app/apikey

2. Generate a Gemini API Key.

3. Open


script.js

Replace

javascript
const API_KEY = "YOUR_API_KEY";

with

javascript
const API_KEY = "YOUR_GEMINI_API_KEY";

user

1. Start Live Server.
2. Type your message.
3. Click **Send** or press **Enter**.
4. The chatbot sends your prompt to the Gemini API.
5. Gemini generates a response and displays it on the screen

 Workflow
User
   │
   ▼
Types Message
   │
   ▼
JavaScript Fetch API
   │
   ▼
Google Gemini API
   │
   ▼
AI Response
   │
   ▼
Displayed in Chat Window

Concepts Used
- DOM Manipulation
- Event Listeners
- Async/Await
- Fetch API
- JSON
- API Integration
- Error Handling
- Responsive Design

 Common Errors

### 429 Quota Exceeded

You have reached your Gemini API quota.

Solution:

- Generate a new API Key
- Wait for quota reset
- Enable billing if required

 Invalid API Key

Check whether your API key is correct.

Failed to Fetch

Run the project using **Live Server** instead of opening the HTML file directly.

Future Improvements

- Chat History
- Dark / Light Theme
- Image Upload Support
- Voice Input
- Voice Output
- Typing Animation
- Streaming Responses
- Markdown Rendering
- Code Syntax Highlighting
- Multiple AI Models

 Author

**Pratik Lad**

B.Tech Computer Science & Engineering

GitHub: https://github.com/pratik-lad

LinkedIn: https://www.linkedin.com/in/pratik-lad-94476b33b


License

This project is licensed under the MIT License.

Support

If you found this project helpful, please consider giving it a on GitHub.
