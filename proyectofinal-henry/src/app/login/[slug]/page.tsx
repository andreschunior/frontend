import { Navbar } from '@/Components/LandinPage/Navbar'
import Login from '@/Components/Login/Login'

import React from 'react'

const page = ({ params }: { params: { slug: number } }) => {
  return (
    <>
        <Navbar />
        <Login page={params.slug} />
    </>

  )
}

export default page