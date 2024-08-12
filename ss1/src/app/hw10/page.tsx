import React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faCar, faHome} from '@fortawesome/free-solid-svg-icons'

export default function Page() {
  return (
    <div>
      <h3>Danh sách các icon</h3>
      <div className='flex gap-5'>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faCar} />
      </div>
    </div>
  )
}
