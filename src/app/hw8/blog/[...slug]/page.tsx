"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const pathname = usePathname();
  const blogPath = pathname.replace("/blog", "");

  return (
    <div>
      <h1>Bạn đang xem blog với đường dẫn:</h1>
      <p>{blogPath ? blogPath : ""}</p>
    </div>
  );
}
