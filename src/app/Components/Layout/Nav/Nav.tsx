import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='  h-25 w-full flex px-2 md:px-15 fixed bg-slate-100 z-5'>
      <div className='w-50 h-full relative p-2 hidden sm:block '>
        <Link href='/'>
          <Image
            src='/images/logo.png'
            alt='Logo'
            fill
            priority
            className='object-contain'
          />
        </Link>
      </div>
      <div className='w-8 h-full relative p-2 sm:hidden block'>
        <Link href='/'>
          <Image
            src='/images/smallLogo1.png'
            alt='Logo'
            fill
            priority
            className='object-contain'
          />
        </Link>
      </div>
      <div className='w-full flex justify-end px-2 '>
        <ul className='font-semibold flex px-2 items-center md:px-5 gap-3 text-xs md:gap-10 md:text-base '>
          <li>
            <Link href='/'>
              <button className='cursor-pointer hover:text-slate-400 transition-colors duration-200'>
                3D MODELS
              </button>{' '}
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <button className='cursor-pointer hover:text-slate-400 transition-colors duration-200'>
                ABOUT
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
