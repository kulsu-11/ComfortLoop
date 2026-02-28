import { useState, useRef, useEffect } from "react";

function Support() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {

    if(input.trim() === "") return;

    const userMessage = {
      type: "user",
      text: input
    };

    setMessages(prev => [...prev, userMessage]);

    setLoading(true);

    try {

      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: input
        })
      });

      const data = await res.json();

      const botMessage = {
        type: "bot",
        text: data.reply || "I am here to listen 💚"
      };

      setMessages(prev => [...prev, botMessage]);

    } catch(error){

      setMessages(prev => [
        ...prev,
        { type: "bot", text: "Support system is currently offline 💚" }
      ]);

    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="page">

      <h2 style={{ color:"#2ecc71" }}>
        Support Chat 💬
      </h2>

      <div style={{
        height:"350px",
        overflowY:"auto",
        border:"1px solid #eee",
        padding:"12px",
        borderRadius:"12px",
        marginBottom:"15px",
        background:"#fafafa"
      }}>

        {messages.map((msg, index) => (
          <div key={index}
            style={{
              textAlign: msg.type === "user" ? "right" : "left",
              margin:"10px 0"
            }}
          >
            <span style={{
              display:"inline-block",
              background: msg.type === "user" ? "#4a90e2" : "#e8f5e9",
              color: msg.type === "user" ? "white" : "black",
              padding:"10px 14px",
              borderRadius:"14px",
              maxWidth:"75%"
            }}>
              {msg.text}
            </span>
          </div>
        ))}

        {loading && <p>Typing...</p>}

        <div ref={chatEndRef}></div>

      </div>

      <div style={{ display:"flex", gap:"10px" }}>

        <input
          type="text"
          placeholder="Talk to Comfort Loop 💚"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          style={{
            flex:1,
            padding:"12px",
            borderRadius:"12px",
            border:"1px solid #ddd",
            outline:"none"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding:"10px 18px",
            borderRadius:"12px",
            border:"none",
            background:"#4a90e2",
            color:"white",
            cursor:"pointer",
            fontWeight:"500"
          }}
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default Support;