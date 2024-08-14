import React from 'react'
import variables from './variables.module.scss'
export default function page() {
    //đặt biến tỏng scss
  return (
    <div>
      <p style={{color:variables.primaryColor}}>Rikkei Academy</p>
      <p style={{color:variables.secondaryColor}}>Rikkei Academy</p>
    </div>
  )
}
