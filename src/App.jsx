import React from "react";
import { materials } from "./data/materials";
import InventoryTable from "./components/InventoryTable";
import ChatAI from "./components/AIQueryBox";

function App() {
  const materials = [
    { position: "A1", code: "C44080100072", size: "M10", quantity: 250, date: "2025-11-03" },
    { position: "B3", code: "C44080100073", size: "M8", quantity: 120, date: "2025-10-29" },
  ];
  
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Stitching Stock</h1>

      {/* Bảng vật tư */}
      <InventoryTable data={materials} />

      {/* Khu vực AI tra cứu */}
      <div style={{ marginTop: "50px" }}>
        <ChatAI />
      </div>
    </div>
  );
}

export default App;
