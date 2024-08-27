"use client";

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import ProductsPageServer from "../server-cpn/page";
import { reverse } from "dns";

export default function page() {
  // todo : state
  const [products, setProducts] = useState<any>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [sort, setSort] = useState<string>("");

  // todo : lấy data từ server
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    getData();
  }, []);

  // todo : lọc sản phẩm theo giá
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;

    const sortedProducts = [...products];

    if (selectedSort === "theMostExpensive") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "theCheapest") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(sortedProducts);
  };

  // todo : thay thế client cpn khi đang lấy data
  if (load) return <ProductsPageServer></ProductsPageServer>;
  return (
    <div>
      <h1>Products List</h1>
      <select name="" id="" value={sort} onChange={handleChange}>
        <option value="theMostExpensive">Đắt nhất</option>
        <option value="theCheapest">Rẻ nhất</option>
      </select>
      <ul>
        {products.map((product: any, index: number) => (
          <li key={product.id} className="flex gap-5 items-center">
            <p>#{index + 1}</p>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
