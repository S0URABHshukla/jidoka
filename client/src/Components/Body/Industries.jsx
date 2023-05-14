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
import industries from './Industries.module.css';
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
          marginBottom={"100px"}
        >
          INDUSTRIES WE SERVE
        </Heading>
        
      </Center>
      <div ><hr className={industries.hr}/></div> 
      
      <Tabs defaultIndex={0}>
        <TabPanels position={"relative"} width={'100%'}>
          <TabPanel padding={'0'} position={'relative'} width={'100%'}>
            <Image
              position={'relative'}
              // height={'auto'}
              boxSize="650px"
              w="100%"
              fit="cover"
              src={img4}
            />
            <div className={industries.textParentdiv}></div>
            <div className={industries.industriesp2tag}>
              <h1
                style={{ color: 'orange', fontSize: '32px', textAlign: 'left' }}
              >
                Industrial Robots
              </h1>
              <p>
              Manufacturers of injection manipulators, die-casting manipulators, multi-axis robots, etc. Configurable components for productive, efficient, and cost saving solutions. Jidoka's vast selection of products make us an ideal resource for many of well-known companies. Get the catalog and solutions today!
              </p>
            </div>
          </TabPanel>
          <TabPanel padding={'0'} position={'relative'} width={'100%'}>
            <Image
              // display={'block'}
              // height={'auto'}
              boxSize="650px"
              w="100%"
              fit="cover"
              src={img6}
            />
            <div className={industries.textParentdiv}></div>
            <div className={industries.industriesp2tag}>
              <h1
                style={{ color: 'orange', fontSize: '32px', textAlign: 'left' }}
              >
                Automotive
              </h1>
              <p>
                Manufacturers of automobiles, auto parts and related equipment
                for automobile manufacturing. Our configurable options and large
                offering of materials and surface treatments ensure you will get
                the right parts for your build. Whether you’re a automotive
                manufacturer or an auto parts automation equipment provider, we
                have the components you need.
              </p>
            </div>
          </TabPanel>
          <TabPanel padding={'0'} position={'relative'} width={'100%'}>
            <Image boxSize="650px" w="100%" fit="cover" src={img2} />
            <div className={industries.textParentdiv}></div>
            <div className={industries.industriesp2tag}>
              <h1
                style={{ color: 'orange', fontSize: '32px', textAlign: 'left' }}
              >
                3C Industry
              </h1>
              <p>
              Manufacturers of 3C products (mobile phones, computers, tablet computers, Bluetooth headsets and other consumer electronic products) and related equipment. Jidoka is proud to offer an expansive catalog of parts for 3C products automation solutions. Our configurability options allow you to find the right part to fit into any build.
              </p>
            </div>
          </TabPanel>
          <TabPanel padding={'0'} position={'relative'} width={'100%'}>
            <Image boxSize="650px" w="100%" fit="cover" src={img3} />
            <div className={industries.textParentdiv}></div>
            <div className={industries.industriesp2tag}>
              <h1
                style={{ color: 'orange', fontSize: '32px', textAlign: 'left' }}
              >
                Machine Tools
              </h1>
              <p>
              Jidoka offers an extensive catalog of high-quality machine tool parts and components for modern manufacturing processes. Our parts meet or exceed industry standards and are highly configurable, ensuring the right fit for any build. Our knowledgeable staff and streamlined ordering process ensure quick and efficient service for all your machine tool needs.
              </p>
            </div>
          </TabPanel>
          <TabPanel padding={'0'} position={'relative'} width={'100%'}>
            <Image boxSize="650px" w="100%" fit="cover" src={img7} />
            <div className={industries.textParentdiv}></div>
            <div className={industries.industriesp2tag}>
              <h1
                style={{ color: 'orange', fontSize: '32px', textAlign: 'left' }}
              >
              Other Industries
              </h1>
              <p>
              Manufacturers of solar power, photovoltaic power stations and related equipment. Whether space, efficiency, or accuracy is the concern, Jidoka is proud to offer an expansive catalog of parts for photovoltaic automation solutions. Our fast delivery, lower prices and extensive parts catalog can help you achieve one-stop purchase.
              </p>
            </div>
          </TabPanel>
          <TabList
            position="absolute"
            width={"100%"}
            bottom={"0"}
            height={'3rem'}
            display={'flex'}
            justifyContent={'space-between'}
            bg="white"
            opacity={'90%'}
            transition="opacity 0.2s"
            color={'#FBB917'}
            whiteSpace={'nowrap'}
            overflowX={"auto"}
          >
            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
                color: '#FBB917',
              }}
              _hover={{ bg: '#FBB917', color: 'white', opacity: 1 }}
              _selected={{ bg: '#FBB917', color: 'white', opacity: 1 }}
            >
              <PrecisionManufacturingIcon /> &nbsp; Industrial Robots
            </Tab>
            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: '#FBB917', color: 'white', opacity: 1 }}
              _selected={{ bg: '#FBB917', color: 'white', opacity: 1 }}
            >
              <DirectionsCarIcon /> &nbsp; Automotive
            </Tab>
            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: '#FBB917', color: 'white', opacity: 1 }}
              _selected={{ bg: '#FBB917', color: 'white', opacity: 1 }}
            >
              <SpeakerIcon /> &nbsp; 3C Industry
            </Tab>
            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: '#FBB917', color: 'white', opacity: 1 }}
              _selected={{ bg: '#FBB917', color: 'white', opacity: 1 }}
            >
              <ConstructionIcon /> &nbsp; Machine Tools
            </Tab>
            <Tab
              sx={{
                fontWeight: 'medium',
                fontSize: { base: 'sm', md: 'lg' },
              }}
              _hover={{ bg: '#FBB917', color: 'white', opacity: 1 }}
              _selected={{ bg: '#FBB917', color: 'white', opacity: 1 }}
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
