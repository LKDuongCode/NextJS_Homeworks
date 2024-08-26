import axios from "axios";
import React from "react";

// todo : call api
export default async function Page() {
  try {
    /// promise.all lấy api song song
    const [usersRes, postsRes] = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ]);
    const users = usersRes.data;
    const posts = postsRes.data;

    return (
      <>
        <h1>Dữ liệu từ Nhiều API (SSR)</h1>
        <div className="flex gap-5">
          <h2>Danh sách Người dùng</h2>
          <ul>
            {users.map((user: any) => (
              <li key={user.id}>
                <p>{user.name}</p> - {user.email}
              </li>
            ))}
          </ul>

          <h2>Danh sách Bài viết</h2>
          <ul>
            {posts.map((post: any) => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    return (
      <div>
        <h1>Dữ liệu từ Nhiều API </h1>
        <p>Không thể tải dữ liệu.</p>
      </div>
    );
  }
}
