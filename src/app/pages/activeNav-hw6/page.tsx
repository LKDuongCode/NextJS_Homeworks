"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const pathName = usePathname();
  return (
    <div>
      <Link
        className={`${pathName === "/home-hw1" ? "active" : ""}`}
        href={"/home-hw1"}
      >
        Home
      </Link>
      <Link href={"/contact"}>contact</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/login"}>login</Link>
    </div>
  );
}
