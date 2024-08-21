import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Đường dẫn
const filePath = path.join(
  process.cwd(),
  "dataBase",
  "products",
  "product.json"
);

export async function POST(request: Request) {
  // Lấy dữ liệu từ body của req
  const { id, product_name, price } = await request.json();

  if (!id || !product_name || !price) {
    return NextResponse.json({ message: "Sản phẩm thiếu thông tin" });
  }

  // Đọc dữ liệu hiện tại từ file products.json
  let products = [];
  try {
    const data = fs.readFileSync(filePath, "utf8");
    products = JSON.parse(data); // Lưu dữ liệu vào biến products
  } catch (error) {
    return NextResponse.json({ message: "Lỗi khi đọc dữ liệu" });
  }

  // Thêm sản phẩm mới vào mảng sản phẩm hiện tại
  const newProduct = { id, product_name, price };
  products.push(newProduct);

  // Ghi lại mảng sản phẩm đã cập nhật vào file products.json
  try {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
  } catch (error) {
    return NextResponse.json({ message: "Lỗi khi lưu dữ liệu" });
  }

  return NextResponse.json({
    message: "Thêm mới sản phẩm thành công",
    product: newProduct,
  });
}
