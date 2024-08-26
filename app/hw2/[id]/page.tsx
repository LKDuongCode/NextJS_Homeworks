import axios from "axios";
import React from "react";
///định nghĩa params
interface ParamType {
  params: {
    id: string;
  };
}
export default async function page({ params }: ParamType) {
  const { id } = params;

  // todo : tạo hàm lấy dữ liệu tương ứng theo id
  const getAPost = async () => {
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  };

  let post = await getAPost();
  return (
    <div>
      <h2>Chi tiết bài viết</h2>
      <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
