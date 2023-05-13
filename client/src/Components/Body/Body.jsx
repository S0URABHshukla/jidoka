import { Box } from '@chakra-ui/react'
import React from 'react'
import Products from './Products'
import Strength from './Strength'
import Industries from './Industries'
import HomeAbout from './HomeAbout'

function Body() {
  return (
    <Box>
        <Products/>
        <HomeAbout/>
        <Strength/>
        <Industries/>
    </Box>
  )
}

export default Body