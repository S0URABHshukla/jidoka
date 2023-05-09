import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footerhover'>
        <div id='footer'>
            <div>
                <p className='footerHeader' style={{marginBottom:"20px",marginTop:"15px",color:"white",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"600",fontSize:"30px",lineHeight:"40px"}}>(+91)-8826002054</p>
                <p>Jidoka</p>
                <p>P564, MEWLA MAHARAJPUR,</p>
                <p>MATHURA ROAD, FARIDABAD 121001, HARYANA</p>
                {/* <p>P564, MEWLA MAHARAJPUR, MATHURA ROAD, FARIDABAD 121001, HARYANA</p> */}
                <p>sales@ipsarthillp.com</p>
                {/* <button>Feedback</button> */}
            </div>
            <div>
                {/* <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"600",fontSize:"18px",lineHeight:"40px"}}>Customer service</p> */}
                {/* <p>How to register</p>
                <p>Quick selection</p>
                <p>Ordering Guide</p>
                <p>Help Center</p> */}
				<div id='socialsite'>
        <div><img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/745/small/twitter-logo-twitter-icon-transparent-free-free-png.png" alt="twitter"  /></div>
        <div><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="linkedin" /></div>
        <div><img style={{borderRadius:"30px",width:"40px",height:"40px",marginTop:"10px",marginRight:"10px"}} src="data:image/png;base64,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" alt="facebook" /></div>
        <div><img src="https://img.freepik.com/free-icon/youtube_318-566773.jpg" alt="youtube" /></div>
        </div>
            </div>
            <div>
                <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"600",fontSize:"18px",lineHeight:"40px",marginTop:"10px"}}>About us</p>
                <p>About Jidoka</p>
                <p>Contact us</p>
            </div>
        </div>
       
        <div id='copyright'>
            Copyright © 2023 JIDOKA All Rights Reserved
        </div>
    </div>
  )
}

export default Footer