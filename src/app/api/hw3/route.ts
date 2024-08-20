import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";
import React from "react";
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

export async function GET(request: Request) {
  //không dùng được useSearchParams vì chỉ có thể dùng trong clident side
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get("userName");

  //nếu không có
  if (!userName) {
    return NextResponse.json({ error: "userName is required" });
  }
  // trả về mảng chứa những người dùng trùng tên.
  const matchingUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(userName.toLowerCase())
  );

  return NextResponse.json({ data: matchingUsers });
}
