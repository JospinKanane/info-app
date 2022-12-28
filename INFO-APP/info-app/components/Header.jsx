import React, {useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo_footer from '../public/logo.jpg'
import Categories from './Categories'
import Social from './Social'

const Header = () => {
  return (
    <div className='header flex flex-col '>
        <div className='head-main flex flex-row items-center justify-between bg-black text-white'>
          <Link href='/'>
            <Image src={logo_footer} alt='logo' className='logo md:w-50 cursor-pointer' />
          </Link>
          <div className='flex gap-2 items-center'>
            <h2 className='font-bold'>Suivez sur</h2>
            <Social />
          </div>
        </div>
        <Categories />
      </div>
  )
}

export default Header