"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  // todo : các state
  const [posts, setPosts] = useState<any>([]); // state hứng data từ api
  const [curPage, setCurPage] = useState<number>(1); // state số trang hiện tại
  const [perPage, setPerPage] = useState<number>(5); // state số bài trên 1 trang
  const [totalPage, setTotalPage] = useState<number>(0); //tổng số trang

  // todo : lấy dữ liệu từ api
  useEffect(() => {
    ///chỉ sử dụng async/await bên trong các hàm con như useEffect, không trực tiếp trong useEffect.
    const getData = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
        // Tính tổng số trang dựa trên số bài viết và số bài viết mỗi trang
        setTotalPage(Math.ceil(res.data.length / perPage));
      } catch (error: any) {
        return { details: error.message };
      }
    };
    getData();
  }, []);

  // todo : tính toán
  // index của post cuối trong một trang = trang hiện tại * số post / 1 trang
  const indexOfLastPost = curPage * perPage;

  // ngược lại index post đầu
  const indexOfFirstPost = indexOfLastPost - perPage;

  //số posts hiện tại
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Thay đổi trang
  const paginate = (pageNumber: number, req: string) => {
    if (req === "next" && pageNumber < totalPage) {
      setCurPage(pageNumber + 1);
    } else if (req === "prev" && pageNumber > 1) {
      setCurPage(pageNumber - 1);
    }
  };
  return (
    <div>
      <h3>Phân trang với csr</h3>
      <div>
        <ul>
          {currentPosts?.map((post: any) => {
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
      <div className="flex gap-5">
        {/* {Array.from({ length: totalPage }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={` ${index + 1 === curPage ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))} */}
        <button onClick={() => paginate(curPage, "prev")}>prev</button>
        <button onClick={() => paginate(curPage, "next")}>next</button>
        <p>
          page {curPage} / {totalPage}
        </p>
      </div>
    </div>
  );
}
