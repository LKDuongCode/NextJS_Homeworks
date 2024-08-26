import axios from "axios";
import React from "react";
/// generateStaticParams:
// là một hàm trong Next.js được sử dụng để xác định trước các đường dẫn (routes) tĩnh cho các trang động khi sử dụng tính năng tạo trang tĩnh (Static Site Generation - SSG) => trả về một mảng đối tượng chứa các tham số (params) cần thiết để tạo ra các trang tĩnh cho mỗi biến thể của một trang động.

///getStaticProps:
// là một hàm đặc biệt trong Next.js được sử dụng để tiền xử lý dữ liệu cần thiết cho một trang tĩnh (Static Site Generation - SSG) trong quá trình build. Hàm này giúp bạn lấy dữ liệu từ các nguồn bên ngoài (như API, cơ sở dữ liệu, file hệ thống) và truyền dữ liệu đó vào trang dưới dạng props. Các trang sử dụng getStaticProps sẽ được tạo sẵn HTML trong quá trình build, giúp cải thiện hiệu năng và SEO. => trả về một props truyền vào cpn.

//? khi nào nên dùng
/*
- trang không yêu cầu cập nhật dữ liệu thường xuyên.
- muốn tạo các trang tĩnh trước => tối ưu tải trang.
- có dữ liệu có thể được lấy và tạo trang tĩnh trong quá trình build (thay vì khi người dùng truy cập trang).
*/
// todo : định nghĩa params
interface ParamType {
  params: {
    id: string;
  };
}

//todo : hàm generateStaticParams
async function generateStaticParams() {
  // Gọi API
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;

  // Trả về một mảng các params tĩnh với các ID bài viết
  return posts.map((post: any) => ({
    params: {
      id: post.id.toString(),
    },
  }));
}
export default async function page({ params }: ParamType) {
  // gọi api
  let res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  let post = res.data;
  return (
    <div>
      <h3>Chi tiết bài viết với stattic params</h3>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
