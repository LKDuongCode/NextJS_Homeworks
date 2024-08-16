import React from "react";
//tạo type cho giá trị nhận vào
type Props = {
  type?: "success" | "warning" | "delete" | "noticle";
  children?: React.ReactNode;
};
export default function BaseAlert({ type, children }: Props) {
  return (
    <>
      <div className="border-2 border-solid border-red-300 bg-red-100 rounded-md w-[600px] p-3 text-red-500">
        {children}
      </div>
      <div className="border-2 border-solid border-red-300 bg-red-100 rounded-md w-[600px] p-3 text-red-500">
        base
      </div>
    </>
  );
}
