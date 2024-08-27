import axios from "axios";
import React from "react";
// todo : hiển thị data ssr với axios.
/// func call api
const getData = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};
export default async function page() {
  // gọi hàm
  let products = await getData();
  return (
    <div>
      <table border={1} className="border-collapse">
        <thead>
          <tr>
            <th className="p-5">#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro: any, index: number) => {
            return (
              <tr key={pro.id}>
                <td>{index + 1}</td>
                <td className="truncate">{pro.title}</td>
                <td>
                  <img src={`${pro.image}`} className="w-28 h-32" alt="" />
                </td>
                <td>$ {pro.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
