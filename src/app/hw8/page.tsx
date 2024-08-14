"use client"; //thêm dòng này vào vì Trong Next.js 13 trở đi,  cần chỉ định rõ ràng khi một component nên được xử lý như một Client Component. Điều này là cần thiết khi  sử dụng các hooks như useState và useEffect.
import React, { useEffect, useState } from "react";
import ButtonCpn from "./components/ButtonCpn";

export default function page() {
  const [stateBtn, setStateBtn] = useState([]);

  useEffect(() => {
    let arrButton: any = [];
    for (let i = 1; i <= 20; i++) {
      arrButton.push({
        id: i,
        type: "normal",
        children: i.toString(),
      });
    }
    setStateBtn(arrButton);
  }, []);

  return (
    <div className="flex gap-4 ml-28 mt-28">
      <ButtonCpn children="< Prev" type="normal"></ButtonCpn>
      {stateBtn.map((item: any) => {
        return (
          <ButtonCpn
            key={item.id}
            children={item.children}
            type={item.type}
          ></ButtonCpn>
        );
      })}
      <ButtonCpn children="Next >" type="normal"></ButtonCpn>
    </div>
  );
}
