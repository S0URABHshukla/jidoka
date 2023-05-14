import React, { useEffect, useRef, useState } from 'react';
import video from './videodesign.mp4';
import './Video.css';

function Video() {
  const videoRef = useRef(null);
  const [currentOption, setCurrentOption] = useState(0);
  const [currentOption2, setCurrentOption2] = useState(0);

  useEffect(() => {
    const options = ['Single Stop Purchasing Platform For Factory Automation Components.', 'Make us Part of Your Automation Facility with 1,00,000+ SKU\'s.'];
    const intervalId = setInterval(() => {
      setCurrentOption(currentOption => (currentOption + 1) % options.length);
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const options2 = ['Automation.', 'Components.','Fasteners','Cutting Tools'];
    const intervalId2 = setInterval(() => {
      setCurrentOption2(currentOption2 => (currentOption2 + 1) % options2.length);
    }, 2000);

    return () => {
      clearInterval(intervalId2);
    };
  }, []);

  return (
    <div style={{ position: 'relative',display:"flex" }}>
      <div className='videojidoka' style={{width:"100%",position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <p className='videojidoka1' style={{ color:"#FBB917" }}>Jidoka</p>
        <p className='videojidoka2'>
          <span style={{ color:"#FBB917" }}>{currentOption === 0 ? 'Single Stop ' : ''}</span>
          {currentOption === 0 && 'Purchasing Platform For Factory Automation Components.'}
          <span style={{ color:"#FBB917" }}>{currentOption === 1 ? 'Make us ' : ''}</span>
          {currentOption === 1 && 'Part of Your Automation Facility with 1,00,000+ SKU\'s.'}
        </p>
        <p className='videojidoka3'>
          <span style={{ color:"#FBB917" }}>We Sell </span>
          {currentOption2 === 0 && 'Automation'}
          {currentOption2 === 1 && 'Components'}
          {currentOption2 === 2 && 'Fasteners'}
          {currentOption2 === 3 && 'Cutting Tools'}
        </p>
      </div>

      <video
        className="videodesign"
        ref={videoRef}
        autoPlay
        loop
        muted
        onEnded={() => videoRef.current.play()}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
