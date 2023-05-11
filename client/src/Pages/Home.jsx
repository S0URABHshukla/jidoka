import { Box } from '@chakra-ui/react'
import React from 'react'
import Body from '../Components/Body/Body'
import "./Home.css"
import Video from '../Components/Video/Video'

function Home() {
  return (
    <Box>
       <Video/>       
      <Body/>
    </Box>
  )
}
export default Home