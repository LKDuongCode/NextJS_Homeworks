import { NextApiRequest, NextApiResponse } from "next";

let configData: Record<string, any> = {
  username: "Duong",
  theme: "light",
  language: "vi",
  timezone: "GMT",
};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    // Trả về cấu hình hiện tại
    return response.json({ message: "Cấu hình hiện tại:", configData });
  } else {
    return response.json({ message: "phương thức sai." });
  }
}
