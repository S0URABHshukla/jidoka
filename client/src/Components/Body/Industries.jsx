import {
  Box,
  Center,
  Heading,
  TabPanels,
  TabPanel,
  Tabs,
  Image,
  TabList,
  Tab,
} from '@chakra-ui/react';
import SpeakerIcon from '@mui/icons-material/Speaker';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ConstructionIcon from '@mui/icons-material/Construction';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FactoryIcon from '@mui/icons-material/Factory';
import './Industries.css';
import React from 'react';

import img2 from './image/electronic-min.png';
import img3 from './image/machinetool-min.jpg';
import img4 from './image/robots-min.png';
import img5 from './image/medical-min.png';
import img6 from './image/automotive-min.jpg';
import img7 from './image/other-min.png';

function Industries() {
  return (
    <Box margin="auto" h={['auto', 'auto', 'auto']}>
      <Center>
        <Heading
          margin={['20px 0 10px', '20px 0 10px', '0']}
          fontSize={['2xl', '2xl', '4xl']}
          textAlign={['center', 'center', 'left']}
        >
          INDUSTRIES WE SERVE
        </Heading>
      </Center>
      <Tabs defaultIndex={0}>
        <TabPanels>
          <TabPanel>
            <Image boxSize="650px" w="100%" fit="cover" src={img4} />
          </TabPanel>
          <TabPanel>
            <Image boxSize="650px" w="100%" fit="cover" src={img6} />
          </TabPanel>
          <TabPanel>
            <Image boxSize="650px" w="100%" fit="cover" src={img2} />
          </TabPanel>
          <TabPanel>
            <Image boxSize="650px" w="100%" fit="cover" src={img3} />
          </TabPanel>
          <TabPanel>
            <Image boxSize="650px" w="100%" fit="cover" src={img5} />
          </TabPanel>
          <TabPanel>
            <Image boxSize="650px" w="100%" fit="cover" src={img7} />
          </TabPanel>
          <TabList
            height={'3rem'}
            display={'flex'}
            justifyContent={'space-between'}
            padding={'0.4% 1%'}
            bg="black"
            marginLeft={{ base: '1%', md: '1%' }}
            marginRight={{ base: '1%', md: '1%' }}
            marginTop={'-60px'}
            opacity={'70%'}
            transition="opacity 0.2s"
            rounded="md"
            color={'white'}
            whiteSpace={"nowrap"}
            // overflowX={'scroll'}
          >
            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: 'white', color: 'black', opacity: 1 }}
              _selected={{ bg: 'white', color: 'black', opacity: 1 }}
            >
              <PrecisionManufacturingIcon /> &nbsp; Industrial Robots
            </Tab>
            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: 'white', color: 'black', opacity: 1 }}
              _selected={{ bg: 'white', color: 'black', opacity: 1 }}
            >
              <DirectionsCarIcon /> &nbsp; Automotive
            </Tab>
            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: 'white', color: 'black', opacity: 1 }}
              _selected={{ bg: 'white', color: 'black', opacity: 1 }}
            >
              <SpeakerIcon /> &nbsp; 3C Industry
            </Tab>
            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: 'white', color: 'black', opacity: 1 }}
              _selected={{ bg: 'white', color: 'black', opacity: 1 }}
            >
              <ConstructionIcon /> &nbsp; Machine Tools
            </Tab>

            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: 'white', color: 'black', opacity: 1 }}
              _selected={{ bg: 'white', color: 'black', opacity: 1 }}
            >
              <MedicalServicesIcon /> &nbsp; Medical
            </Tab>

            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: 'white', color: 'black', opacity: 1 }}
              _selected={{ bg: 'white', color: 'black', opacity: 1 }}
            >
              <FactoryIcon /> &nbsp; Other Industries
            </Tab>
          </TabList>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Industries;
