import React from 'react'
import Image from 'next/image'
// link than khao : https://nextjs.org/docs/pages/building-your-application/optimizing/images
export default function page() {
    //không biết lỗi ở đâu
  return (
    <div>
            <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkVkqOZafiXuLQgQvgJt7uFx-PzGPf8VVMQ&s"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    </div>
  )
}
