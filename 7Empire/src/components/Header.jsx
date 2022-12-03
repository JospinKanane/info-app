import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/logo-7Empire.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt='Logo Seven Rmpire' className='logo'/>
        <Navbar/>
    </div>
  )
}

export default Header