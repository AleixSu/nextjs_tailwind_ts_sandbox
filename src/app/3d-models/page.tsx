import React from 'react'
import type { JSX } from 'react'
import NavBar from './_components/NavBar'
import Catalog from './_components/Catalog'

const page = async (): Promise<JSX.Element> => {
  return (
    <main className='flex'>
      <NavBar />
      <Catalog />
    </main>
  )
}

export default page
