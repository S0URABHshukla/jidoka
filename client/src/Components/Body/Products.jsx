import {
  Box,
  Center,
  Heading,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import './Products.css';
const data = [
  {
    id: 1,
    name: 'Functional Materials',
    image: 'funtionalmaterials.png',
  },
  {
    id: 2,
    name: 'Linear Motion',
    image: 'LinearMotionImage.png',
  },
  {
    id: 3,
    name: 'Industrial Frame Structure Parts',
    image: 'industrialframestructureparts.png',
  },
  {
    id: 4,
    name: 'Pneumatic Parts',
    image: 'pneumaticparts.png',
  },
  {
    id: 5,
    name: 'Positioning Parts',
    image: 'positioningparts1.png',
  },
  {
    id: 6,
    name: 'Rotational Parts',
    image: 'rotationalparts.png',
  },
//   {
//     id: 7,
//     name: 'Shafts',
//     image: 'shafts.jpg',
//   },
  {
    id: 8,
    name: 'Standard Parts',
    image: 'standardparts.png',
  },
  {
    id: 9,
    name: 'Transmission Parts',
    image: 'tm.png',
  },
];

function Products() {
  return (
    <Box p={5} bg="whitesmoke">
      <Center>
        <Heading margin={'10px 0 30px 0'}>PRODUCTS</Heading>
      </Center>
      <div className='productsDivGrid' >
        {data &&
          data?.map(product => (
            <div
              className="productImage"
              key={product.id}
              textAlign={'center'}
              style={{ gap: '10px' }}
            >
              <div>
                <Image
                  src={product.image}
                  h="300px"
                  w="400px"
                  margin={'auto'}
                />
              </div>
              <div className='productsImageDetailName' fontWeight="800" color='yellow' margin="0 0 0px 0">
                {product.name}
              </div>
            </div>
          ))}
      </div>
    </Box>
  );
}

export default Products;
