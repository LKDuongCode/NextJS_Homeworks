import React from "react";
// todo : hiển thị dữ liệu ssr bằng fetch
/// func call api
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json(); // lấy data json từ res obj
  return data;
};

export default async function page() {
  const posts: any = await getData();
  return (
    <div>
      <h3>Post List</h3>
      <ul>
        {posts.map((post: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
