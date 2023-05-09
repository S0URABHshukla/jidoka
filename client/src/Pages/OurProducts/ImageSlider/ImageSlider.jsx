import { useState, useEffect } from 'react';
import img1 from "./img1.png"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"


const images = [
    img1, 
    img2,
    img3,
    img4,
    img5,
  ];
function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        // if (!isPaused) {
            setCurrentIndex((currentIndex + 1) % images.length);
          // }
      }, 2000);  
      return () => clearInterval(interval);
    }, [currentIndex]);
    // const handleHover = () => {
    //     setIsPaused(true);
    //   };
    
    //   const handleMouseLeave = () => {
    //     setIsPaused(false);
    //   };
  
    return (
      <div>
        <img src={images[currentIndex]} alt="slideshow"
        // onMouseEnter={handleHover}
        // onMouseLeave={handleMouseLeave}
        />
      </div>
    );
}

export default ImageSlider;