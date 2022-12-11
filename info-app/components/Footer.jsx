import React from 'react'
import Image from 'next/image'
import logo_footer from '../public/logo.jpg'
import {FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin, FaYoutube}  from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer flex flex-col bg-black text-white w-full absolute bottom-0 pt-5">
          <div className='footer-social flex flex-row justify-center items-center'>
            <Image src={logo_footer} alt='logo footer' className='logo_footer cursor-pointer'/>
            <div className='social-icons flex flex-row justify-center items-center'>
              <FaFacebook className='icone hover:text-red-600 cursor-pointer'/>
              <FaTwitterSquare className='icone hover:text-red-600 cursor-pointer'/>
              <FaInstagram className='icone hover:text-red-600 cursor-pointer'/>
              <FaLinkedin className='icone hover:text-red-600 cursor-pointer'/>
              <FaYoutube className='icone hover:text-red-600 cursor-pointer'/>
            </div>
          </div>
          <ul className='ulFooter flex flex-row gap-20 justify-center p-30 items-center font-bolt'>
              <li className='hover:text-red-600 cursor-pointer'>Home</li>
              <li className='hover:text-red-600 cursor-pointer'>Blog</li>
              <li className='hover:text-red-600 cursor-pointer'>About</li>
              <li className='hover:text-red-600 cursor-pointer'>Contact</li>
              <li className='hover:text-red-600 cursor-pointer'>Terms and Conditions</li>
              <li className='hover:text-red-600 cursor-pointer'>Cookie policy</li>
              <li className='hover:text-red-600 cursor-pointer'>Distribution</li>
              <li className='hover:text-red-600 cursor-pointer'>Advertising</li>
              <li className='hover:text-red-600 cursor-pointer'>Jobs</li>
          </ul>
      </div>
  )
}

export default Footer