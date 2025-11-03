import React from "react";

const InventoryTable = ({ data }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">📦 Danh sách vật tư kho</h2>
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
              <td className="border p-2">{item.viTri}</td>
              <td className="border p-2">{item.maVatLieu}</td>
              <td className="border p-2 text-center">{item.size}</td>
              <td className="border p-2 text-right">{item.soLuong.toLocaleString()}</td>
              <td className="border p-2 text-center">{item.ngayGR}</td>
              <td className="border p-2 text-center">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${item.maVatLieu}`}
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

