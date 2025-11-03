// src/services/geminiQuery.js

export async function queryMaterialInfo(input, materials) {
  // Chuẩn hóa mã vật liệu nhập vào
  const query = input.trim().toUpperCase();

  // Tìm vật tư có mã khớp
  const found = materials.find((m) => m.code.toUpperCase() === query);

  if (!found) {
    return `❌ Không tìm thấy mã vật tư "${query}" trong kho.`;
  }

  // Nếu tìm thấy, trả về thông tin chi tiết
  return (
    `✅ Thông tin vật tư:\n` +
    `• Mã: ${found.code}\n` +
    `• Vị trí: ${found.position}\n` +
    `• Size: ${found.size}\n` +
    `• Số lượng: ${found.quantity}\n` +
    `• Ngày nhập kho: ${found.date}`
  );
}
