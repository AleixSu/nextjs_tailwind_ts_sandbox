import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <nav className='  h-25 w-full flex px-2 md:px-5'>
      <div className='w-50 h-full relative p-2'>
        <Image
          src='/images/logo.png'
          alt='Logo'
          fill
          priority
          className='object-contain'
        />
      </div>
      <div className='w-full font-semibold flex justify-end px-2 md:px-5 gap-3 text-xs md:gap-10  md:text-base'>
        <button className='cursor-pointer hover:text-slate-400 transition-colors duration-200'>
          3D MODELS
        </button>
        <button className='cursor-pointer hover:text-slate-400 transition-colors duration-200'>
          ABOUT
        </button>
      </div>
    </nav>
  )
}

export default Nav
