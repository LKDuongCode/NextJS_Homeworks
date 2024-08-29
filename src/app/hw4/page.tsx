// todo : import Image
import Image from "next/image";
/// cpn Image tích hợp sẵn lazi loading,
import axios from "axios";

//todo : call api
const getPhoto = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/photos");
  return res.data.slice(0, 200);
};

export default async function page() {
  const photos = await getPhoto();
  return (
    <div>
      <h3 className="text-center">lazy loading</h3>
      <div className="grid grid-cols-3 gap-5">
        {photos.map((post: any, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-3 ">
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
