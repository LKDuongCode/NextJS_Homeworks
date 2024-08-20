import { NextRequest, NextResponse } from "next/server";
//mảng dữ liệu (giả sử đang được lưu ở cơ sở dữ liệu)
const users = [
  {
    id: 1,
    userName: "duong",
    age: 18,
  },
  {
    id: 2,
    userName: "hoang",
    age: 18,
  },
  {
    id: 3,
    userName: "doan",
    age: 18,
  },
];

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ data: data, message: "add successly" });
}
