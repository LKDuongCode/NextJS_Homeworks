import React from "react";

export default function page() {
  return (
    <div className="w-80 h-96 rounded-md border-solid border m-10 flex flex-col gap-3 p-5">
      <div className="max-w-80 max-h-48">
        <img
          src="https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/tsn231431_12.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-semibold">Áo phông nam</h3>
        <p>Ao phong nam mat me</p>
      </div>
      <button className="bg-blue-400 rounded-md p-3 text-white">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}
