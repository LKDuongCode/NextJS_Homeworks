"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/hw2");
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return null; // Hoặc một loading spinner
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Đây là nội dung chỉ hiển thị khi người dùng đã đăng nhập.</p>
    </div>
  );
}
