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
    user_id: string;
  };
}

export async function DELETE(request: Request, { params }: ParamType) {
  //id của đối tượng cần xóa
  const { user_id } = params;
  return NextResponse.json({ idForDelete: user_id });
}
