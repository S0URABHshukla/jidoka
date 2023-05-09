import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import StrengthImageSlider from './StrengthImageSlider'
import img1 from "./imge1.png"
import img2 from "./BN.jpg"
import img3 from "./iStock.jpg"
import img4 from "./maxresdefault.jpg"
import img5 from "./medizdeliya.jpeg"

function Industries() {
  return (
    <Box margin="auto" h="615px" >
        <Center><Heading margin="0 0 20px 0">INDUSTRIES WE SERVE</Heading></Center>
        <StrengthImageSlider/>
    </Box>
  )
}

export default Industries