import { useState } from "react";
import { queryMaterialInfo } from "../services/geminiQuery";
import { materials } from "../data/materials"; // hoặc fetch từ Supabase

export default function AIQueryBox() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleQuery = async () => {
    if (!input.trim()) return;
    setResult("⏳ Đang tìm dữ liệu...");
    const reply = await queryMaterialInfo(input, materials);
    setResult(reply);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl max-w-xl mx-auto mt-6">
      <h2 className="text-lg font-bold mb-3">🔍 Bạn cần tìm gì? (Gemini)</h2>
      <div className="flex gap-2">
        <input
          className="border flex-1 p-2 rounded"
          placeholder="Nhập mã vật liệu (vd: C44080100072)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleQuery}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Tìm
        </button>
      </div>
      {result && <div className="mt-4 border p-3 rounded bg-gray-50">{result}</div>}
    </div>
  );
}
