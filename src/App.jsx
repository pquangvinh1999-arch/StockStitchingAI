import React from "react";
import { materials } from "./data/materials";
import InventoryTable from "./components/InventoryTable";
import ChatAI from "./components/ChatAI";

function App() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Stitching Stock</h1>

      {/* Bảng vật tư */}
      <InventoryTable data={materials} />

      {/* Khu vực AI tra cứu */}
      <div className="mt-8">
        <ChatAI />
      </div>
    </div>
  );
}

export default App;
