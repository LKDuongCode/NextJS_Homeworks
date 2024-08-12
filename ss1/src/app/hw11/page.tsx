import React from 'react'

export default function page() {
  return (
    <div className='grid grid-cols-6 h-[500px] gap-5 m-5'>
      <div className='col-span-2 bg-black text-white text-center'>Menu</div>
      <div className='col-span-4 bg-green-400 text-center'>Main</div>
    </div>
  )
}
