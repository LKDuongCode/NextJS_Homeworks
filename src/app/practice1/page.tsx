import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function page() {
  return (
    <div>
      <Header></Header>
      <div className='flex flex-col gap-3'>
        <h2>About us</h2>
        <p>This is information</p>
      </div>
      <Footer></Footer>
    </div>
  )
}
