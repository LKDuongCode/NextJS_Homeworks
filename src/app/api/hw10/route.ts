import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Đường dẫn tới file product.json
const filePath = path.join(
  process.cwd(),
  "dataBase",
  "products",
  "product.json"
);

export async function GET() {
  try {
    // Đọc dữ liệu từ file products.json
    const data = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(data);

    // Trả về danh sách sản phẩm
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: "Lỗi khi đọc dữ liệu" });
  }
}
