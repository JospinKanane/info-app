import React, {useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo_footer from '../public/logo.jpg'

const categories = [{name:"react", slug:"react-dev"},{name:"Web dev", slug:"web-dev"}]

const Header = () => {
  return (
    <div className='header flex flex-row items-center justify-between bg-black text-white'>
        <Link href='/'>
          <Image src={logo_footer} alt='logo' className='logo md:w-50 cursor-pointer' />
        </Link>
        <div className='navBar p-10' id='myNavbar'>
         {
          categories.map((category) => (
            <Link className='gap-20 p-5'  key={category.slug} href={`/category/${category.slug}`} >
              <span>{category.name}</span>
            </Link>
          ))
         }
        </div>
      </div>
  )
}

export default Header