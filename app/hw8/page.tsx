"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  //todo: Dùng csr để gọi API
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    getData();
  }, []);

  //todo : hàm tìm kiếm
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // todo : hàm lọc
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Tìm kiếm bài viết</h2>
      <div>
        <input
          type="text"
          placeholder="Nhập từ khóa..."
          onChange={handleSearch}
        />
      </div>
      <div>
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
