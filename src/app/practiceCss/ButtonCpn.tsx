import React from "react";
import buttonStyle from "./pracCss.module.css";
import classNames from "classnames";
type PropType = {
  type?: "primary" | "danger";
  children?: React.ReactNode;
};
export default function ButtonCpn({ type, children }: PropType) {
  return (
    <button
      className={classNames(buttonStyle.button, {
        [buttonStyle.button_primary]: type === "primary",
        [buttonStyle.button_danger]: type === "danger",
      })}
    >
      {children}
    </button>
  );
}
