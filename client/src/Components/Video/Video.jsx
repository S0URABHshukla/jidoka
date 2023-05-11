import React, { useEffect, useRef} from 'react'
import video from "./videodesign.mp4"
import "./Video.css"
function Video() {
    const videoRef = useRef(null);
    useEffect(() => {
      const video = videoRef.current;
      const timeoutId = setTimeout(() => {
        video.pause();
        video.currentTime = 0;
        video.play();
      }, 500);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
    return (
      <div>
        <video style={{marginTop:"-80px"}} className='videodesign' ref={videoRef} autoPlay loop muted onEnded={() => videoRef.current.play()}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }

export default Video