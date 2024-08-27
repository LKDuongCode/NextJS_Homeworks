import axios from "axios";
import { error } from "console";
import React from "react";
// todo : xử lí lỗi và hiển thị thông báo, sử dụng swr.

/// định nghĩa kiểu dữ liệu cho response
interface ResType {
  data: any;
  error: string | null;
}

///func call api
const getData = async () => {
  try {
    let res = await axios.get("https://example.com/invalid-endpoint");
    return { data: res.data, error: null };
  } catch (error: any) {
    if (error.response) {
      // Lỗi phản hồi từ server
      return {
        data: null,
        error: `Error ${error.response.status}: ${error.response.statusText}`,
      };
    } else if (error.request) {
      // Không nhận được phản hồi từ server
      return { data: null, error: "No response from server" };
    } else {
      // Lỗi khác
      return { data: null, error: "Error in setting up the request" };
    }
  }
};
export default async function page() {
  const { data, error } = await getData();

  // Hiển thị thông báo lỗi
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  //nếu có dữ liệu
  return (
    <>
      <h1>details data</h1>
      <p>{data.json()}</p>
    </>
  );
}
