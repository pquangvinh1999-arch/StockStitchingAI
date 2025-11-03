import React from "react";
import { materials } from "./data/materials";
import InventoryTable from "./components/InventoryTable";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <InventoryTable data={materials} />
    </div>
  );
}

export default App;

