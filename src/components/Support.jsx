import { useState } from "react";

function Support() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;

    const newChat = [
      ...chat,
      { sender: "user", text: message },
      { sender: "bot", text: "I'm here for you 💚 Tell me more." }
    ];

    setChat(newChat);
    setMessage("");
  };

  return (
    <div>
      <div style={{ marginBottom: "15px", minHeight: "150px" }}>
        {chat.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender === "user" ? "You: " : "Support: "}</strong>
            {msg.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type how you're feeling..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />
      <button
        onClick={handleSend}
        style={{
          padding: "8px",
          marginLeft: "5px",
          backgroundColor: "#4a90e2",
          color: "white",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Send
      </button>
    </div>
  );
}

export default Support;