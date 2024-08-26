import axios from "axios";
import React from "react";

export default async function page() {
  // todo : tạo hàm lấy dữ liệu từ api
  const getData = async () => {
    /// sử dụng try catch để bắt và xử lí data
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;
    } catch (error) {
      return error;
    }
  };

  let posts: any = await getData();

  return (
    <div>
      <h2 className="uppercase">Danh sách bài viết</h2>
      {/* in ra màn hình danh sách bài viết  */}
      <div>
        {posts?.map((post: any) => {
          return (
            <li key={post.id} style={{ listStyle: "none" }}>
              <h4>{post.title}</h4>
              <p className="truncate max-w-3xl">{post.body}</p>
              <hr />
            </li>
          );
        })}
      </div>
    </div>
  );
}
