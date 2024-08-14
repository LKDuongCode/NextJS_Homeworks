import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
export default function page() {
  return (
    <div className='bg-slate-100 rounded-md px-3 py-1 w-max'>
      <label htmlFor="input" className='text-sm text-blue-400'>Label</label>
     <div className='flex items-center gap-2 border-2 border-solid border-blue-400 rounded-md p-2'>
     <input className='border-transparent bg-transparent outline-none font-medium text-base w-96' type="text" placeholder='Placeholder....' name='input'/>
    <FontAwesomeIcon icon={faEye} width={20} height={20}  />
     </div>
     <p className='text-sm text-slate-400'>Helper Text</p>
    </div>
  )
}
