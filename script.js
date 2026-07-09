const API_KEY = "API - KEY";

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${"API - KEY"}`;

const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

async function generateResponse(prompt) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        });

        const data = await response.json();

        console.log("API Response:", data);

        if (!response.ok) {
            throw new Error(data.error?.message || "API Error");
        }

        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

function cleanMarkdown(text) {
    return text
        .replace(/#{1,6}\s?/g, "")
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\*/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function addMessage(message, isUser) {

    const messageElement = document.createElement("div");
    messageElement.className = `message ${isUser ? "user-message" : "bot-message"}`;

    const profileImage = document.createElement("img");
    profileImage.className = "profile-image";
    profileImage.src = isUser ? "user.jpg" : "bot.jpg";

    const messageContent = document.createElement("div");
    messageContent.className = "message-content";
    messageContent.textContent = message;

    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleUserInput() {

    const userMessage = userInput.value.trim();

    if (userMessage === "") return;

    addMessage(userMessage, true);

    userInput.value = "";

    sendButton.disabled = true;
    userInput.disabled = true;

    try {

        const response = await generateResponse(userMessage);

        addMessage(cleanMarkdown(response), false);

    } catch (error) {

        addMessage("❌ " + error.message, false);

    } finally {

        sendButton.disabled = false;
        userInput.disabled = false;
        userInput.focus();

    }
}

sendButton.addEventListener("click", handleUserInput);

userInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        e.preventDefault();
        handleUserInput();
    }

});