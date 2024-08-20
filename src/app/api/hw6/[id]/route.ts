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
//kiểu dữ liệu params
interface ParamType {
  params: {
    id: string;
  };
}
export async function PUT(request: Request, { params }: ParamType) {
  //lấy dữ liệu người dùng
  const inputData = await request.json();

  //lấy id của bản ghi cần cập nhật
  const { id } = params;

  // kiểm tra xem id có tồn tại trong danh sách người dùng hay không
  const userIndex = users.findIndex((user) => user.id === +id);

  if (userIndex === -1) {
    // nếu id không tồn tại, trả về thông báo lỗi
    return NextResponse.json({
      error: "User not found",
    });
  }

  return NextResponse.json({
    idFound: id,
    userUpdated: inputData,
  });
}
