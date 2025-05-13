import React from 'react'
import Navbar from '../Navbar'
import Carousel from '../Carousel'
import Welcome from '../Welcome'
import MidCol from '../MidCol'
import Service from '../Service'
import Partnering from '../Partnering'
import Doctors from '../Doctors'
import OurTeam from '../OurTeam'
import Footer from '../Footer'
import Box from '../Box'
import Testomonials from '../Testomonials'

const Landing = () => {
  return (
   <>
   <Navbar/>
   <Carousel/>
   <Welcome/>
   <MidCol/>
   {/* <Service/> */}
   <Partnering/>
   <Doctors/>
   <Box/>
   <Testomonials/>
   <OurTeam/>
   <Footer/>
   </>
  )
}

export default Landing
