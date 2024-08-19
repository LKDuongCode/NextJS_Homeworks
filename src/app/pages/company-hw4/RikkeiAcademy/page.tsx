"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const pathName = usePathname();
  return <div>pathname : {pathName}</div>;
}
