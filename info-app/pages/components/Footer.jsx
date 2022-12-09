import React from 'react'
import {FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin, FaYoutube}  from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo-footer'>
          <FaFacebook className='icons'/>
          <FaTwitterSquare className='icons'/>
          <FaInstagram className='icons'/>
          <FaLinkedin className='icons'/>
          <FaYoutube className='icons'/>
        </div>
        <ul className='footerList'>
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms and Conditions</li>
              <li>Cookie policy</li>
              <li>Distribution</li>
              <li>Advertising</li>
              <li>Jobs</li>
          </ul>
    </div>
  )
}

export default Footer