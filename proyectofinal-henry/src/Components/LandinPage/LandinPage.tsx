import React from 'react'
import { Navbar } from './Navbar'
import { Promo1 } from './Promo1/page'
import { PlanesInternet } from './PlanesDeInternet/page'
import { Banner } from './banner/Banner'
import { Seccion } from './SolicitudServicio/Seccion'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Promo1 />
    <PlanesInternet />
    <Banner />
    <Seccion />
  </>
  )
}

export default LandingPage;