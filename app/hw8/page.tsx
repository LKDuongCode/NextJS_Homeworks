import axios from "axios";

const getData = async () => {
  const [usersRes, todosRes] = await Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/users"),
    axios.get("https://jsonplaceholder.typicode.com/todos"),
  ]);

  const users = usersRes.data;
  const todos = todosRes.data;

  const combinedData = todos.map((todo: any) => {
    const user = users.find((user: any) => user.id === todo.userId);
    return {
      ...todo,
      userName: user ? user.name : "Unknown User",
    };
  });

  return combinedData;
};

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <h1>Danh sách công việc và người dùng</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>Người thực hiện: {item.userName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
