import React from "react";
import { materials } from "./data/materials";
import InventoryTable from "./components/InventoryTable";
import ChatAI from "./components/ChatAI";

function App() {
  return (
    <div>
      <h1>📦 Danh sách vật tư trong kho</h1>
      {/* số lượng thực tế */}
      <ChatAI />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <InventoryTable data={materials} />
    </div>
  );
}

export default App;

