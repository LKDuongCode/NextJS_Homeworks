import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Link href={"/home-hw1"}>Home</Link>
      <Link href={"/contact"}>contact</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/login"}>login</Link>
    </div>
  );
}
