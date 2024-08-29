import React from "react";
// todo : import Image
import Image from "next/image";
//todo : metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  description: "Đây là danh sách bài viết...",
  keywords: "posts",
};

//todo : mảng chứa các bài viết
const postsArr = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa natus vel",
    thumbnailUrl:
      "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
  },
  {
    id: 2,
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    thumbnailUrl:
      "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
  },
  {
    id: 3,
    title:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    thumbnailUrl:
      "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
  },
  {
    id: 4,
    title:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore",
    thumbnailUrl:
      "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
  },
  {
    id: 5,
    title:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus",
    thumbnailUrl:
      "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
  },
  {
    id: 6,
    title:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis",
    thumbnailUrl:
      "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
  },
];

export default function page() {
  return (
    <div>
      <h3 className="text-center">Danh sách bài viết</h3>
      <div className="grid grid-cols-3 gap-5">
        {postsArr.map((post: any) => {
          return (
            <div key={post.id} className="flex flex-col gap-3 ">
              <div className="relative w-full h-40">
                <Image
                  src={post.thumbnailUrl}
                  alt="Picture of the author"
                  layout="fill" ///sử dụng hai thuộc tính này để hình ảnh cover hoàn toàn div chứa.
                  objectFit="fill"
                />
              </div>
              <div>{post.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
