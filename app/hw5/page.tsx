"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  // todo : state quản lí
  const [products, setProducts] = useState<any>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  //todo : call api
  useEffect(() => {
    /// tạo hàm call
    const getData = async () => {
      try {
        // URL khác kèm thêm thông tin bổ sung như: statusCode, message, data
        // Tác dụng bảo vệ Route gốc
        let res = await axios.get("http://localhost:3000/api/products");
        console.log(res.data);

        setProducts(res.data.data);
      } catch (error: any) {
        setErr(error.message);
      } finally {
        setLoad(false);
      }
    };

    ///gọi
    getData();
  }, []);

  if (load) return <p>loading....</p>;
  if (err) return <p>{err}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
