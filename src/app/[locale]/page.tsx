"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const [language, setLanguage] = useState<string>("en");

  // Xác định ngôn ngữ từ URL và thiết lập giá trị cho select nếu không sẽ gây xung đột giữa url ngôn ngữ hiện tại và giá trị của select
  useEffect(() => {
    const currentLang = window.location.pathname.split("/")[1];
    if (currentLang === "en" || currentLang === "vi") {
      setLanguage(currentLang);
    }
  }, [router]);

  // Sử dụng useRouter để chuyển ngôn ngữ
  const switchLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    router.push(`/${selectedLang}`);
  };

  console.log(language);
  return (
    <div>
      <select className="text-black" onChange={switchLang} value={language}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <h4>{t("name")}</h4>
      <h4>{t("age")}</h4>
    </div>
  );
}
