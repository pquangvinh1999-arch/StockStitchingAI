import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import ChatAI from "./components/AIQueryBox";

function App() {
  // 🧠 State cho chatbox
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // 📨 Gửi tin nhắn
  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  // 📦 Dữ liệu mẫu cho bảng vật tư
  const materialsList = [
    { position: "A1", code: "C44080100072", size: "M10", quantity: 250, date: "2025-11-03" },
    { position: "B3", code: "C44080100073", size: "M8", quantity: 120, date: "2025-10-29" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>💬 Chatbox</h2>

      {/* Khung hiển thị tin nhắn */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.length === 0 ? (
          <p style={{ color: "#999" }}>Chưa có tin nhắn nào...</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index}>
              <b>{msg.sender}:</b> {msg.text}
            </div>
          ))
        )}
      </div>

      {/* Ô nhập tin nhắn */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập tin nhắn..."
        style={{ marginRight: "10px" }}
      />
      <button onClick={sendMessage}>Gửi</button>

      {/* Bảng vật tư */}
      <div style={{ marginTop: "30px" }}>
        <h3>📦 Danh sách vật tư</h3>
        <InventoryTable data={materialsList} />
      </div>

      {/* AI tra cứu */}
      <div style={{ marginTop: "50px" }}>
        <ChatAI materials={materialsList} />
      </div>
    </div>
  );
}

export default App;
