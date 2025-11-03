import { useState } from "react";
import { askGemini } from "../services/gemini";

export default function ChatAI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");
    const reply = await askGemini(input);
    setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-bold mb-3">💬 Trợ lý kho hàng (Gemini)</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-3 bg-gray-50 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "ai" ? "text-blue-600" : "text-black"}>
            <b>{msg.sender === "ai" ? "Gemini:" : "Bạn:"}</b> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border flex-1 p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Hỏi AI về tồn kho..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Gửi
        </button>
      </div>
    </div>
  );
}
