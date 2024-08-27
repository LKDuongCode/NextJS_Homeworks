import axios from "axios";
import React from "react";

export default async function ProductsPageServer() {
  // todo : ssr
  const getData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      return [];
    }
  };

  const products: any[] = await getData();

  return (
    <div>
      <h1>Products List</h1>
      <select name="" id="">
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
