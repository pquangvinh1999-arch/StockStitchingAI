import React, { useState } from "react";
import { queryMaterialInfo } from "../lib/geminiQuery";

export default function ChatAI({ materials }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Xin chào! Hãy nhập mã vật liệu (ví dụ: C44080100072) để xem thông tin trong kho." },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const aiResponse = await queryMaterialInfo(input, materials);
      const assistantMessage = { role: "assistant", text: aiResponse };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Có lỗi xảy ra khi truy vấn dữ liệu. Vui lòng thử lại!" },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-4 border rounded-2xl shadow bg-white">
      <h2 className="text-xl font-semibold mb-3 text-center">🔍 Tra cứu vật tư bằng AI</h2>

      <div className="h-80 overflow-y-auto border p-2 rounded-lg bg-gray-50 mb-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`my-2 p-2 rounded-xl ${
              m.role === "user"
                ? "bg-blue-100 text-right"
                : "bg-gray-200 text-left"
            }`}
          >
            {m.text}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500 italic">Đang truy vấn dữ liệu...</div>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          placeholder="Nhập mã vật liệu..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border p-2 rounded-xl focus:outline-none"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 disabled:opacity-50"
        >
          Gửi
        </button>
      </div>
    </div>
  );
}
