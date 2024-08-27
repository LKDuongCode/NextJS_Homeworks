"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState<any[]>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);
  // todo : call api
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (error: any) {
        setErr(error.message);
      } finally {
        setLoad(false);
      }
    };
    getData();
  }, []);

  if (load) return <p>loading....</p>;
  if (err) return <p>{err}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <p>Name :{user.name}</p>
            <p>Email :{user.email}</p>
            <p> Address :{user.address.city}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
