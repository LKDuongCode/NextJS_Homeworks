import axios from "axios";
import React from "react";

/// hàm lấy dữ liệu
export const getData = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};
