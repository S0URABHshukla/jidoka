import { Box } from '@chakra-ui/react'
import React from 'react'
import Body from '../Components/Body/Body'
import YouTube from 'react-youtube';
import videodesign from "./videodesign.mp4"
import "./Home.css"

function Home() {
  return (
    <Box>
      <div style={{ display:"flex",justifyContent:"center",height:"600px", width:"100%",background:"#F5F5F5"}}>
        <video className='videodesign' controls autoplay="1">
          <source src={videodesign} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
      </div>
      <Body/>
    </Box>
  )
}

export default Home