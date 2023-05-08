import { Box, Center, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Strength() {
    const [count, setCount] = React.useState(1000);
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => {
              const newCount = count + 400;
              return newCount >= 40000 ? 40000 : newCount;
            });
          }, 10);      
        return () => clearInterval(intervalId);
      }, []);
    
  return (
    <Box>
        <Center>
            <Heading margin={"10px 0 30px 0"}>STRENGTH</Heading>
        </Center>
        <Box>
            <Flex>
                <Box w="50%">
                    <Image src="https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png" w="full"/>
                </Box>
                <VStack m="auto" spacing={10}>
                    <Heading>
                        Numbers of Customers
                    </Heading>
                    <Text color="gray" fontSize={'lg'}>
                        We have trust and support from over 40,000 customers
                    </Text>
                    <Heading>
                    {count.toLocaleString()}+
                    </Heading>    
                </VStack>
            </Flex>
        </Box>
    </Box>
  )
}

export default Strength