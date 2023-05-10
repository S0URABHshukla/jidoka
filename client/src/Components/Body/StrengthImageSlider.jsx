import React from 'react'
import "./StrengthImageSlider.css"
import { useState, useEffect } from 'react';
import img1 from "./imge1.png"
import img2 from "./BN.jpg"
import img3 from "./iStock.jpg"
import img4 from "./maxresdefault.jpg"
import img5 from "./medizdeliya.jpeg"
import img6 from "./automotive.png"
import img7 from "./other.png"


const images = [
    img1, 
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];
  const names = [
    "Telecom", 
    "Electronic",
    "Machine Tool",
    "Industrial Robots",
    "Medical",
    "Automotive",
    "Other Industries",
  ];

function StrengthImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
      }, 10000);  
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    return (
      <div className="simageslidr" >
        <img src={images[currentIndex]} alt="slideshow"/>
        <p className='simageName'>{names[currentIndex]}</p>
      </div>
    );
}

export default StrengthImageSlider