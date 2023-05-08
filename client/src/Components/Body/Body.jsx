import { Box } from '@chakra-ui/react'
import React from 'react'
import Products from './Products'
import Strength from './Strength'
import Industries from './Industries'

function Body() {
  return (
    <Box>
        <Products/>
        <Strength/>
        <Industries/>
    </Box>
  )
}

export default Body