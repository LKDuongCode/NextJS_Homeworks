"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/hw3_4?name=${name}&category=${category}`);
  };
  const searchParams = useSearchParams();
  const nameGet = searchParams.get("name");
  const categoryGet = searchParams.get("category");
  return (
    <div>
      <div>
        <h1>tên sản phẩm : {nameGet}</h1>
        <h1>danh mục : {categoryGet}</h1>
      </div>
      <div className="flex gap-5">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-300 p-2 text-black"
        />
        <input
          type="text"
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 p-2 text-black"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
          send
        </button>
      </div>
    </div>
  );
}
