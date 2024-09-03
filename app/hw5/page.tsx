"use client";

import { useUser } from "@clerk/nextjs";

export default function ProfilePage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <div>Bạn chưa đăng nhập.</div>;
  }

  return (
    <div>
      <p>
        Tên người dùng: {user?.firstName} {user?.lastName}
      </p>
      <p>Email: {user?.emailAddresses[0].emailAddress}</p>
    </div>
  );
}
