import React from "react";
//import css
import buttonStyle from "../buttonCss.module.css";
import classNames from "classnames";
//tạo type cho prop
type PropType = {
  type?: "primary" | "success" | "warning" | "danger";
  children?: React.ReactNode;
};

export default function ButtonCpn({ type, children }: PropType) {
  //tạo điều kiện
  // type là loại button
  // children là nột dung truyền vào
  // thiết lập mặc định nếu không truyền gì vào sẽ là class button.
  return (
    <button
      className={classNames(buttonStyle.button, {
        // thiết lập trường hợp nếu truyền vào type giá trị khác
        [buttonStyle.button_primary]: type === "primary",
        [buttonStyle.button_success]: type === "success",
        [buttonStyle.button_warning]: type === "warning",
        [buttonStyle.button_danger]: type === "danger",
      })}
    >
      {children}
    </button>
  );
}
