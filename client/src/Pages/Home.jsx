import { Box } from '@chakra-ui/react'
import React from 'react'
import Body from '../Components/Body/Body'
import Navbar from '../Components/Navbar'
import { Footer } from '../Components/Footer/Footer'

function Home() {
  return (
    <Box>
      <Navbar/>
      <Body/>
      <Footer/>
    </Box>
  )
}

export default Home