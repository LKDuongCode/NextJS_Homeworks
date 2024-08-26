"use client";

import React, { useEffect, useState } from "react";
import { getData } from "./serverCpn/page";

export default function page() {
  const [postsState, setPostsState] = useState<any>([]);

  // todo : sử dụng ssr lấy dữ liệu ban đầu.
  useEffect(() => {
    /// cần dụng then để xử lí kết quả vì client cpn không dùng được async await trong nextjs.
    ///cần tách việc lấy data ssr thành hàm riêng trong cpn riêng.
    getData().then((data) => setPostsState(data));
  }, []);

  // todo : sử dụng csr lấy dữ liệu saiu khi lằm mới
  const handleRe = () => {
    getData().then((data) => setPostsState(data));
  };

  return (
    <div>
      <h2>
        Danh sách bài viết với refresh
        <button className="ml-10" onClick={handleRe}>
          refresh
        </button>
      </h2>
      <div>
        <ul>
          {postsState?.map((post: any) => {
            return (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p className="truncate max-w-3xl">{post.body}</p>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
