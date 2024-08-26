import axios from "axios";
import React from "react";

export default async function page() {
  // todo : hàm lấy dữ liệu
  const getData = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  };

  let users: any = await getData();
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users?.map((user: any) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
