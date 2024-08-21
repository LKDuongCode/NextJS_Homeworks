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

export async function PUT(request: Request) {
  try {
    // Lấy dữ liệu sản phẩm mới
    const { id, product_name, price } = await request.json();

    if (!id || (product_name === undefined && price === undefined)) {
      return NextResponse.json({
        message: "ID và thông tin sản phẩm là bắt buộc.",
      });
    }

    // Đọc dữ liệu hiện tại từ file products.json
    let products = [];
    try {
      const data = fs.readFileSync(filePath, "utf8");
      products = JSON.parse(data);
    } catch (error) {
      return NextResponse.json({ message: "Lỗi khi đọc dữ liệu" });
    }

    // Tìm sản phẩm
    const productIndex = products.findIndex(
      (product: any) => product.id === id
    );

    if (productIndex === -1) {
      return NextResponse.json({ message: "Sản phẩm không tìm thấy" });
    }

    // Cập nhật thông tin sản phẩm
    if (product_name !== undefined)
      products[productIndex].product_name = product_name;
    if (price !== undefined) products[productIndex].price = price;

    // Ghi lại mảng sản phẩm đã cập nhật vào file products.json
    try {
      fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    } catch (error) {
      return NextResponse.json({ message: "Lỗi khi lưu dữ liệu" });
    }

    // Trả về thông báo thành công và sản phẩm đã cập nhật
    return NextResponse.json({
      message: "Cập nhật sản phẩm thành công",
      product: products[productIndex],
    });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi khi xử lý yêu cầu" });
  }
}
