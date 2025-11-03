import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// ✅ Truyền dữ liệu kho vào AI và yêu cầu nó tìm đúng mã vật tư
export async function queryMaterialInfo(prompt, materials) {
  const materialText = materials
    .map(
      (m) =>
        `Vị trí: ${m.position}, Mã vật liệu: ${m.code}, Size: ${m.size}, Số lượng: ${m.quantity}, Ngày GR: ${m.date}`
    )
    .join("\n");

  const fullPrompt = `
Dưới đây là danh sách vật tư trong kho:
${materialText}

Người dùng hỏi: "${prompt}"

→ Trả lời lại đúng 1 dòng vật tư có mã trùng, với đủ thông tin:
Vị trí | Mã vật liệu | Size | Số lượng | Ngày GR
`;

  const result = await model.generateContent(fullPrompt);
  return result.response.text();
}
