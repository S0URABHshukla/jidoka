import { Box, Center, Heading, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import "./Products.css"
const data = [
    {
        id: 1,
        name: "Functional Materials",
        image: "funtionalmaterials.png",
    },
    {
        id: 2,
        name: "Linear Motion",
        image: "LinearMotionImage.png",
    },
    {
        id: 3,
        name: "Industrial Frame Structure Parts",
        image: "industrialframestructureparts.png",
    },
    {
        id: 4,
        name: "Pneumatic Parts",
        image: "pneumaticparts.png",
    },
    {
        id: 5,
        name: "Positioning Parts",
        image: "positioningparts1.png",
    },
    {
        id: 6,
        name: "Rotational Parts",
        image: "rotationalparts.png",
    },
    {
        id: 7,
        name: "Shafts",
        image: "shafts.jpg",
    },
    {
        id: 8,
        name: "Standard Parts",
        image: "standardparts.png",
    },
    {
        id: 9,
        name: "Transmission Parts",
        image: "TRANSMISSIONPARTS.png",
    },
]

function Products() {
  return (
    <Box p={5} bg="whitesmoke">
    <Center>
        <Heading margin={"10px 0 30px 0"}>PRODUCTS</Heading></Center>
    <SimpleGrid objectFit={"cover"} columns={3} w="90%" margin={'auto'}>
     {
        data && data?.map((product) => (
            <VStack className='productImage' key={product.id} textAlign={'center'} style={{gap:"10px"}}>
                <Box><Image src={product.image} h="300px" w="400px" margin={'auto'}/></Box>
                <Box fontWeight="bold" margin="0 0 20px 0">{product.name}</Box>
                <Box>{product.description}</Box>
            </VStack>
        ))
     }   
    </SimpleGrid>
    </Box>
  )
}

export default Products