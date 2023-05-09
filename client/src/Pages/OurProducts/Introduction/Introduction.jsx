import React from 'react'
import "./Introduction.css"
import VideoPlayer from '../VideoPlayer/VideoPlayer'
function Introduction() {
  return (
    <div className='introduction'>
        <div>
            <img style={{zIndex:"-10"}} src="https://www.yhdfa.vn/_nuxt/img/company.2839388.png" alt="" />
            <p className='cmpny'>Company Introduction</p>
        </div>
        <div>
          <VideoPlayer/>
          <VideoPlayer/>
          <VideoPlayer/>

        {/* <video width="320" height="240" controls autoplay>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
      </video> */}
        </div>
        <div>
          <img style={{width:"285px",height:"376px",zIndex:"-10"}} src="https://www.yhdfa.vn/_nuxt/img/product.97053db.jpg" alt="" />
          <p className='cmpny'>Product Introduction</p>
        </div>
        <div>
          <VideoPlayer/>
          <VideoPlayer/>
          <VideoPlayer/>

        {/* <video width="320" height="240" controls autoplay>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
      </video> */}
        </div>

        
    </div>
  )
}

export default Introduction