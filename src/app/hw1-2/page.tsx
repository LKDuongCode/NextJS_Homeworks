"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export default function page() {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search");
  return (
    <>
      <div>search value : {searchValue}</div>
      <div className="flex gap-5">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="text-black"
        />
        <button
          onClick={() => router.push(`hw1-2?search=${value}`)}
          className="bg-blue-400"
        >
          send
        </button>
      </div>
    </>
  );
}
