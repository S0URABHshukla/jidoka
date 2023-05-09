import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import highQualityBrand from './highQualityBrand.png';
import afterSalesService from './afterSalesService.png';
import globalHighQuality from './globalHighQuality.png';
function Strength() {

  return (
    <Box>
      <Center>
        <Heading margin={'10px 0 30px 0'}>STRENGTH</Heading>
      </Center>
      <div style={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}} className='news'>
        <div className='newz'>
            <div className='newsArticle'>
                <div style={{color:"#E8223B"}} className='vert'><span>|</span> Core Competency</div>
                <div className='read'></div>        
            </div>
            <div className='newsDetails' style={{display:"flex",alignItems:"center",paddingBottom:"10px"}}>
                <img style={{ width: '30px' }} src={highQualityBrand} alt="" /> &nbsp;&nbsp;
                <p>#1 High Quality Standard</p>                
            </div>
            <div className='newsDetails' style={{display:"flex",alignItems:"center",paddingBottom:"10px"}}>
                <img style={{ width: '30px' }} src={afterSalesService} alt="" /> &nbsp;&nbsp;
                <p>#2 After Sales Service</p>                
            </div>
            <div className='newsDetails' style={{display:"flex",alignItems:"center",paddingBottom:"10px"}}>
                <img style={{ width: '30px' }} src={highQualityBrand} alt="" /> &nbsp;&nbsp;
                <p>#3 Continuously Onboarding Global High-Quality Supplier</p>                
            </div>
        </div>
        <div className='newz'>
            <div className='newsArticle' >
                <div style={{color:"#E8223B"}} className='vert'><span>|</span> Our Objectives</div>
                <div className='read'></div>                
            </div>
            <div className='newsDetails' style={{display:"flex",alignItems:"center",paddingBottom:"10px"}}>
                <img style={{ width: '30px' }} src={highQualityBrand} alt="" /> &nbsp;&nbsp;
                <p>#1 Reasonable Price</p>                
            </div>
            <div className='newsDetails' style={{display:"flex",alignItems:"center",paddingBottom:"10px"}}>
                <img style={{ width: '30px' }} src={afterSalesService} alt="" /> &nbsp;&nbsp;
                <p>#2 Personalized or Customized Product Mfg.</p>                
            </div>
            <div className='newsDetails' style={{display:"flex",alignItems:"center",paddingBottom:"10px"}}>
                <img style={{ width: '30px' }} src={highQualityBrand} alt="" /> &nbsp;&nbsp;
                <p>#3 Continuously Onboarding Global High-Quality Supplier</p>                
            </div>
           
        </div>
    </div>
    </Box>
  );
}

export default Strength;
