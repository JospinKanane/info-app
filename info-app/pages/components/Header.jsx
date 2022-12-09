// import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import logo from '/logo-7Empire.png'

const Header = () => {
  return (
    <div>
      <Image src={logo} alt='logo' />
      <Navbar/>
    </div>
  )
}

export default Header