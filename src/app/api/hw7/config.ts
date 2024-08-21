import { NextApiRequest, NextApiResponse } from "next";

let configData: Record<string, any> = {};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    // Lấy dữ liệu từ body của yêu cầu
    const { username, theme, language, timezone } = request.body;

    // Kiểm tra nếu các thông tin cần thiết đã được cung cấp
    if (!username || !theme || !language || !timezone) {
      return response.json({ message: "Chưa đủ thông tin cấu hình." });
    }

    // Lưu trữ dữ liệu cấu hình vào biến toàn cục
    configData = { username, theme, language, timezone };

    return response.json({ message: "Lưu cấu hình thành công.", configData });
  } else {
    return response.json({ message: "Không phải post." });
  }
}
