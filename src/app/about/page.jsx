import React from 'react'
import Nav from '../Components/Layout/Nav/Nav'
import Image from 'next/image'

const page = () => {
  return (
    <section>
      <Nav />
      <article>
        <div class='m-auto w-[90%] aspect-square bg-blue-500 rounded-md relative '>
          <Image
            src='/images/hero.png'
            alt='3D printing models img'
            fill
            priority
            className='object-contain rounded-xs'
          />
        </div>
        <div className=' mx-4 m-auto py-5  my-5 text-justify flex flex-col gap-5 border-b-2 border-slate-200'>
          <h4 className='text-xs font-semibold'>ABOUT PRINTFORGE</h4>
          <h1 className='font-montserrat text-4xl font-bold'>
            Empowering makers worlwide
          </h1>
          <p>
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing. Our mission is
            to foster a vibrant community where creativity meets technology,
            enabling anyone to bring their ideas to life through 3D printing.
          </p>
          <p>
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing
          </p>
        </div>
        <div>
          {/*           <div>
            <div>
              {' '}
              <Image src='' alt=' ' />
              <h3></h3>
            </div>
            <p></p>
          </div>
          <div>
            <div>
              {' '}
              <Image src='' alt=' ' />
              <h3></h3>
            </div>
            <p></p>
          </div>
          <div>
            <div>
              {' '}
              <Image src='' alt=' ' />
              <h3></h3>
            </div>
            <p></p>
          </div> */}
        </div>
      </article>
    </section>
  )
}

export default page
