"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { ReactNode, useState } from "react";

export default function page() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [records, setRecords] = useState<number>(100);
  const [limit, setLimit] = useState<number>(10);
  const totalPage = Math.ceil(records / limit);

  // Chuyển đến trang tiếp theo
  const handleNextPage = (): void => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Quay lại trang trước
  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Chọn trang hiện tại
  const handleChoiceCurrentPage = (page: number): void => {
    setCurrentPage(page);
  };

  // Hiển thị logic trang giống với antd
  const renderPages = (): ReactNode => {
    const pages: ReactNode[] = [];
    const pageNeighbors = 1; // Số lượng trang liền kề

    const startPage = Math.max(2, currentPage - pageNeighbors);
    const endPage = Math.min(totalPage - 1, currentPage + pageNeighbors);

    const hasLeftSpill = startPage > 2;
    const hasRightSpill = endPage < totalPage - 1;

    const spillOffset = pageNeighbors * 2 + 3;
    const pagesToShow = totalPage > spillOffset;

    pages.push(
      <Button
        onClick={handlePrevPage}
        key="prev"
        variant={"secondary"}
        size={"icon"}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </Button>
    );

    // Trang đầu tiên
    pages.push(
      <Button
        onClick={() => handleChoiceCurrentPage(1)}
        key={1}
        variant={currentPage === 1 ? "default" : "secondary"}
        size={"icon"}
      >
        1
      </Button>
    );

    // Hiển thị dấu "..." bên trái
    if (hasLeftSpill && pagesToShow) {
      pages.push(<span key="left-spill">...</span>);
    }

    // Hiển thị các trang ở giữa
    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <Button
          onClick={() => handleChoiceCurrentPage(page)}
          key={page}
          variant={currentPage === page ? "default" : "secondary"}
          size={"icon"}
        >
          {page}
        </Button>
      );
    }

    // Hiển thị dấu "..." bên phải
    if (hasRightSpill && pagesToShow) {
      pages.push(<span key="right-spill">...</span>);
    }

    // Trang cuối cùng
    if (totalPage > 1) {
      pages.push(
        <Button
          onClick={() => handleChoiceCurrentPage(totalPage)}
          key={totalPage}
          variant={currentPage === totalPage ? "default" : "secondary"}
          size={"icon"}
        >
          {totalPage}
        </Button>
      );
    }

    pages.push(
      <Button
        onClick={handleNextPage}
        key="next"
        variant={"secondary"}
        size={"icon"}
        disabled={currentPage === totalPage}
      >
        <ChevronRight />
      </Button>
    );

    return <div className="flex gap-3">{pages}</div>;
  };

  return <main className="p-5">{renderPages()}</main>;
}
