import axios from "axios";
import { NextResponse } from "next/server";

// todo : router handler xử lí yêu cầu get
export async function GET() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return NextResponse.json({
      data: res.data,
      statusCode: 200,
      message: "Thêm thành công",
    });
  } catch (error) {
    return NextResponse.error();
  }
}
