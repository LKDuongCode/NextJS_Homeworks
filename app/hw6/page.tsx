"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { isSignedIn, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(); // Thực hiện đăng xuất
    router.push("/hw2"); // Chuyển hướng đến trang /sign-in
  };

  return (
    <div>
      <h1>Trang chủ</h1>
      <div>
        {isSignedIn ? (
          <>
            <p>Xin chào, bạn đã đăng nhập!</p>
            <button onClick={handleSignOut} className="bg-red-400">
              Đăng xuất
            </button>
          </>
        ) : (
          <p>Bạn chưa đăng nhập.</p>
        )}
      </div>
    </div>
  );
}
