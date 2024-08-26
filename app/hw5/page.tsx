import axios from "axios";
import React from "react";

export default async function page() {
  //todo : tạo hàm lấy data và sử dụngtry catch xử lí lỗi
  const getData = async () => {
    try {
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/nonexistent-url "
      );
      return res.data;
    } catch (error: any) {
      return {
        error: "Lấy dữ liệu thất bại",
        details: error.message || "Unknown error occurred",
      };
    }
  };

  let data = await getData();
  return (
    <div>
      <h3>Xử lsi lỗi với SSR</h3>
      <div>{data.error}</div>
      <div>{data.details}</div>
    </div>
  );
}
