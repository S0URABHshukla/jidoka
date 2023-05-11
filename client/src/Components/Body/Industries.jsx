import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import StrengthImageSlider from './StrengthImageSlider'

function Industries() {
  return (
    <Box margin="auto" h={["auto", "auto", "auto"]}>
        <Center><Heading margin={["20px 0 10px", "20px 0 10px", "0"]} fontSize={["2xl", "2xl", "4xl"]} textAlign={["center", "center", "left"]}>INDUSTRIES WE SERVE</Heading></Center>
        <StrengthImageSlider/>
    </Box>
  )
}

export default Industries
