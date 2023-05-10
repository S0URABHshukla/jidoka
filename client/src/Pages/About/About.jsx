import "./About.css"
import React from 'react'
import aboutJidoka from "./aboutJidoka.png"
import jidokaSales from "./jidokaSales.png"

function About() {
  return (
    <div>
        <div>
            <img style={{width:"100%"}} src={aboutJidoka} alt="aboutJidoka" />
            <img style={{width:"100%"}} src={jidokaSales} alt="aboutJidoka" />
        </div>
        <div></div>
    </div>
  )
}

export default About