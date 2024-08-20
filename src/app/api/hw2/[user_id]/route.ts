import React from "react";
import { NextResponse } from "next/server";
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
//kiểu dữ liệu cho params
interface ParamType {
  params: {
    user_id: number;
  };
}
export async function GET(request: Request, { params }: ParamType) {
  const { user_id } = params;
  let userFound = users.find((user) => user.id === +user_id);
  return NextResponse.json({ data: userFound });
}
