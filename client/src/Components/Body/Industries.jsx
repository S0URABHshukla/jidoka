import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Industries() {
  return (
    <Box backgroundImage={'url("https://www.china-me.com/_nuxt/img/3C.4818aa3.png")'} color="white" h="500px" >
        <Center><Heading>INDUSTRIES SERVED</Heading></Center>
        <Box w="30%" p="10" fontSize={'xl'}>
            <Box p="10">
                <Text color="goldenrod" fontSize={'2xl'}>
                    3C Industry
                </Text>
            </Box>
            <Box>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolores repellat eius deserunt ad fuga numquam nostrum, itaque obcaecati odit.
                </Text>
            </Box>
        </Box>
    </Box>
  )
}

export default Industries