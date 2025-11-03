import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const InventoryTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      const { data, error } = await supabase.from("inventory").select("*");
      if (error) console.error("Lỗi Supabase:", error);
      else setData(data);
      setLoading(false);
    };
    fetchInventory();
  }, []);

  if (loading) return <p className="p-6">Đang tải dữ liệu kho...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">📦 Danh sách vật tư kho (Supabase)</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Vị trí</th>
            <th className="border p-2">Mã vật liệu</th>
            <th className="border p-2">Size</th>
            <th className="border p-2">Số lượng</th>
            <th className="border p-2">Ngày GR</th>
            <th className="border p-2">QR Code</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.vi_tri}</td>
              <td className="border p-2">{item.ma_vat_lieu}</td>
              <td className="border p-2 text-center">{item.size}</td>
              <td className="border p-2 text-right">{item.so_luong?.toLocaleString()}</td>
              <td className="border p-2 text-center">{item.ngay_gr}</td>
              <td className="border p-2 text-center">
                <img
                  src={
                    item.qr_code ||
                    `https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${item.ma_vat_lieu}`
                  }
                  alt="QR"
                  className="mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
