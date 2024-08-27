import React from "react";

// Hàm để fetch dữ liệu từ hai API khác nhau và kết hợp chúng
export async function getServerSideProps() {
  // Sử dụng Promise.all để thực hiện các yêu cầu API song song
  const [usersRes, todosRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/todos"),
  ]);

  // Chuyển đổi dữ liệu sang định dạng JSON
  const users = await usersRes.json();
  const todos = await todosRes.json();

  // Kết hợp dữ liệu dựa trên userId
  const combinedData = todos.map((todo: any) => {
    const user = users.find((user: any) => user.id === todo.userId);
    return {
      ...todo,
      userName: user ? user.name : "Unknown User",
    };
  });

  // Trả về dữ liệu kết hợp như props để render trên trang
  return {
    props: {
      combinedData,
    },
  };
}

// Component để hiển thị dữ liệu trên trang
const CombinedDataPage = ({ combinedData }: { combinedData: any[] }) => {
  return (
    <div>
      <h1>Danh sách công việc và người dùng</h1>
      <ul>
        {combinedData.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>Người thực hiện: {item.userName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CombinedDataPage;
