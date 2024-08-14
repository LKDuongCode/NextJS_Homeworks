import React from 'react'

export default function page() {
  return (
    <div className='w-[410px] h-[260px] mx-auto mt-10 bg-[#f3f3f3] p-2 flex flex-col gap-2'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="" className='text-xs font-semibold'>Input label</label>
        <div className='flex gap-2 w-full border-2 border-solid border-blue-400 rounded-md p-2 bg-white justify-between'>
        <svg className="size-5 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="13" r="7" />  <polyline points="12 10 12 13 14 13" />  <line x1="7" y1="4" x2="4.25" y2="6" />  <line x1="17" y1="4" x2="19.75" y2="6" /></svg>
        <svg className="h-5 w-5 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>
        </div>
      </div>
      <div className='flex flex-col gap-5 w-full border-2 border-solid border-slate-400 rounded-md p-2 bg-white'>
        <div className='flex justify-between'>
        <p className='text-sm'>Label</p>
        <input type="checkbox" />
        </div>
        <div className='flex justify-between'>
        <p className='text-sm'>Label</p>
        <input type="checkbox" />
        </div>
        <div className='flex justify-between'>
        <p className='text-sm'>Label</p>
        <input type="checkbox" />
        </div>
        <div className='flex justify-between gap-2'>
          <button className='bg-transparent border-slate-400 px-5 py-1 border-solid rounded-md w-full text-base font-semibold text-slate-600 '>Clear</button>
          <button className='bg-blue-400 border-blue-400 px-5 py-1 border-solid rounded-md w-full text-base font-semibold text-white '>Apply</button>

        </div>
        </div>
    </div>
  )
}
