import React from 'react'
import Navbar from '../Navbar'
import Carousel from '../Carousel'
import Welcome from '../Welcome'
import MidCol from '../MidCol'
import Service from '../Service'
import Partnering from '../Partnering'
import Doctors from '../Doctors'

const Landing = () => {
  return (
   <>
   <Navbar/>
   <Carousel/>
   <Welcome/>
   <MidCol/>
   <Service/>
   <Partnering/>
   <Doctors/>
   </>
  )
}

export default Landing
