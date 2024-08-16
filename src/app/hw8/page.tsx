"use client"; //* thêm dòng này vào vì Trong Next.js 13 trở đi,  cần chỉ định rõ ràng khi một component nên được xử lý như một Client Component. Điều này là cần thiết khi  sử dụng các hooks như useState và useEffect.
import React, { useEffect, useState } from "react";
import ButtonCpn from "./components/ButtonCpn";
import { findActive } from "./findActiveBtn";

export default function page() {
  console.log("render");
  // Tổng số trang
  const totalPage: number = 20;
  const [indexBtn, setIndexBtn] = useState(0);
  const [stateBtn, setStateBtn] = useState<any>([]);
  // console.log(stateBtn);

  // Effect tạo số nút
  useEffect(() => {
    let arrButton: any = [];
    for (let i = 1; i <= totalPage; i++) {
      arrButton.push({
        id: i,
        type: "normal",
        status: true,
        children: i,
      });
    }
    setStateBtn(arrButton);
  }, []);
  useEffect(() => {
    if (stateBtn.length > 0) {
      let arrButton: any = [...stateBtn];
      // Focus vào nút đầu tiên khi hiển thị giao diện
      arrButton[0].type = "active";
      setStateBtn(arrButton);
    }
  }, [stateBtn.length]);

  const nextNum = () => {
    // Duyệt mảng tìm ra nút nào đang active
    let index = findActive(stateBtn);
    if (index === -1 || index >= stateBtn.length - 1) {
      // Nếu không tìm thấy hoặc đã ở trang cuối, không làm gì
      return;
    }
    // Cập nhật chỉ số nút hiện tại
    setIndexBtn(index + 1);
    let arrButton: any = [...stateBtn];
    arrButton[index].type = "normal";
    arrButton[index + 1].type = "active";
    setStateBtn(arrButton);
  };

  const prevNum = () => {
    // Duyệt mảng tìm ra nút nào đang active
    let index = findActive(stateBtn);
    if (index === -1 || index === 0) {
      // Nếu không tìm thấy hoặc đã ở trang đầu, không làm gì
      return;
    }
    // Cập nhật chỉ số nút hiện tại
    setIndexBtn(index - 1);
    let arrButton: any = [...stateBtn];
    arrButton[index].type = "normal";
    arrButton[index - 1].type = "active";
    setStateBtn(arrButton);
  };

  const choiceNum = (index: number) => {
    let indexCurrent = findActive(stateBtn);
    let arrButton: any = [...stateBtn];
    arrButton[indexCurrent].type = "normal";
    arrButton[index].type = "active";
    setStateBtn(arrButton);
  };

  return (
    <div className="flex gap-4 ml-28 mt-28">
      <div onClick={prevNum}>
        <ButtonCpn children="< Prev" type="normal"></ButtonCpn>
      </div>
      {stateBtn.map((item: any, index: number) => {
        return (
          item.status && (
            <div key={item.id} onClick={() => choiceNum(index)}>
              <ButtonCpn children={item.children} type={item.type}></ButtonCpn>
            </div>
          )
        );
      })}
      <div onClick={nextNum}>
        <ButtonCpn children="Next >" type="normal"></ButtonCpn>
      </div>
    </div>
  );
}
