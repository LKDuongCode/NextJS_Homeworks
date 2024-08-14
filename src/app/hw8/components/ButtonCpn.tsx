import React from "react";
import buttonStyle from "../css/button.module.css";
import classNames from "classnames";
//tạo type prop truyền vào
type Props = {
  type?: "normal" | "active";
  children?: React.ReactNode;
};
export default function ButtonCpn({ type, children }: Props) {
  return (
    <button
      className={classNames(buttonStyle.normal, {
        [buttonStyle.active]: type === "active",
      })}
    >
      {children}
    </button>
  );
}
