import React from 'react'

export default function page() {
  return (
    <div className='bg-[#F5F5F5] mx-auto mt-10 w-[500px] h-[650px] px-10 py-5 flex flex-col gap-5'>
      <h1>Form Sign Up</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-xs font-semibold'>Name</label>
            <input type="text" placeholder='Your name' className=' border p-3 border-slate-300 rounded-md border-solid bg-white'/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-xs font-semibold'>Email</label>
            <input type="text" placeholder='youremail@gmail.com' className=' border p-3 border-slate-300 rounded-md border-solid bg-white'/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-xs font-semibold'>Name</label>
            <div className=' border p-3 border-slate-300 rounded-md border-solid bg-white flex gap-2'>
                <select name="" id="" value={"us"} className='border-none'>
                    <option value="us">US</option>
                </select>
            <input type="text" placeholder='+84 123 456 789' className='border-none outline-none'/>
            </div>

        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-xs font-semibold'>Address</label>
         <textarea name="" id="" className=' border p-3 border-slate-300 rounded-md border-solid bg-white h-24'></textarea>
        </div>
      </div>
      <div  className='flex flex-col gap-2'>
      <label htmlFor="" className='text-xs font-semibold'>Skills</label>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex gap-2'>
        <input type="checkbox" className='size-4'/>
        <p>HTML</p>
        </div>
        <div className='flex gap-2'>
        <input type="checkbox" className='size-4'/>
        <p>UX Design</p>
        </div>
        <div className='flex gap-2'>
        <input type="checkbox" className='size-4'/>
        <p>CSS</p>
        </div>
        <div className='flex gap-2'>
        <input type="checkbox" className='size-4'/>
        <p>JavaScript</p>
        </div>
        <div className='flex gap-2'>
        <input type="checkbox" className='size-4'/>
        <p>ReactJS</p>
        </div>
        <div className='flex gap-2'>
        <input type="checkbox" className='size-4'/>
        <p>Java</p>
        </div>
      </div>
      </div>
      <button className='bg-[#7F56D9] text-white h-9 rounded-md border-transparent'>Sign Up</button>
    </div>
  )
}
