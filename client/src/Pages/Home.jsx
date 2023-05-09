import { Box } from '@chakra-ui/react'
import React from 'react'
import Body from '../Components/Body/Body'
import YouTube from 'react-youtube';

function Home() {
  return (
    <Box>
      <div>
        <YouTube
          videoId="hTQTuwbrVVg"
          opts={{
            width: window.innerWidth.toString(),
            height: '500',
            autoplay: 1,
          }}
        />
      </div>
      <Body/>
    </Box>
  )
}

export default Home