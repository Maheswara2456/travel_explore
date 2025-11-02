// dharshan/chatbot.js

// Select elements
const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chatbot-box");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

// ✅ Toggle open/close
chatToggle.addEventListener("click", () => {
  chatBox.classList.toggle("active");
});

// ✅ Handle user input
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    const userMsg = chatInput.value.trim();
    addMessage("user", userMsg);
    chatInput.value = "";
    setTimeout(() => {
      const botReply = getBotResponse(userMsg);
      addMessage("bot", botReply);
    }, 600);
  }
});

// ✅ Add messages to chat
function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "user-msg" : "bot-msg";
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// ✅ Simple AI responses
function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("hello") || input.includes("hi")) {
    return "Hey traveler! 👋 How can I help you plan your trip?";
  } else if (input.includes("hotel")) {
    return "You can check nearby hotels using our ‘Hotels’ section on the homepage!";
  } else if (input.includes("food") || input.includes("restaurant")) {
    return "Hungry? 🍽 Try ‘Restaurants’ to explore great food places nearby!";
  } else if (input.includes("bye")) {
    return "Safe travels! 🌍✨";
  } else {
    return "I'm your TravelEase assistant 🤖. Try asking about hotels, restaurants, or travel tips!";
  }
}
