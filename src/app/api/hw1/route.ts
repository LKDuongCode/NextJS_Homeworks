import { NextResponse } from "next/server";
import React from "react";
let users = [
  {
    id: 1,
    user_name: "duong",
    age: 19,
  },
  {
    id: 2,
    user_name: "linh",
    age: 12,
  },
];
//lấy tất cả user
export async function GET() {
  return NextResponse.json({ data: users });
}
