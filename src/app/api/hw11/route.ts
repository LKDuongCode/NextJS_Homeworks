import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Đường dẫn tới file products.json
const filePath = path.join(
  process.cwd(),
  "dataBase",
  "products",
  "product.json"
);

export async function DELETE(request: Request) {
  try {
    // Lấy dữ liệu từ body của yêu cầu
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ message: "ID của sản phẩm là bắt buộc." });
    }

    // Đọc dữ liệu hiện tại từ file products.json
    let products = [];
    try {
      const data = fs.readFileSync(filePath, "utf8");
      products = JSON.parse(data);
    } catch (error) {
      return NextResponse.json({ message: "Lỗi khi đọc dữ liệu" });
    }

    // Xóa sản phẩm có ID tương ứng
    const updatedProducts = products.filter(
      (product: any) => product.id !== id
    );

    // Nếu không tìm thấy
    if (products.length === updatedProducts.length) {
      return NextResponse.json({ message: "Sản phẩm không tìm thấy" });
    }

    // Ghi lại mảng sản phẩm đã cập nhật
    try {
      fs.writeFileSync(filePath, JSON.stringify(updatedProducts, null, 2));
    } catch (error) {
      return NextResponse.json({ message: "Lỗi khi lưu dữ liệu" });
    }

    // Trả về danh sách sản phẩm sau khi đã xóa
    return NextResponse.json(updatedProducts);
  } catch (error) {
    return NextResponse.json({ message: "Lỗi khi xử lý yêu cầu" });
  }
}
