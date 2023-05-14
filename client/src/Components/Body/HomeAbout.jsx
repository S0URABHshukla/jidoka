import React from 'react';
import homeabout from './HomeAbout.module.css';

function HomeAbout() {
  return (
    <div id='homeabout'>
    <div  className={homeabout.container}>
      <div className={homeabout.aboutjidoka}>ABOUT JIDOKA</div>
      <div ><hr className={homeabout.hr}/></div> 
      <div className={homeabout.about}>
        <div className={homeabout.text}>
          <p>
            "Jidoka focus on factory automation parts and their vision and
            mission is to being a one-stop supplier for automation across
            industry.
          </p>
          <p>
            Founded in 2015 to focus on supplying high quality standard,
            precise, reliable and durable products by procuring standard
            components through its trusted global network having advanced
            machineries and large production facilities, with emphasis on
            quality product supply and after sale service.
          </p>
          <p>
            Our products are used across several industries likes automotive,
            aeronautical, defense, medical industries, packaging industries,
            electrical, telecom and other manufacturing sectors."
          </p>
        </div>
        <div className={homeabout.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0282125920903!2d77.30318408059816!3d28.44856591327919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddf5607ba095%3A0xdaadd705e5b658cb!2sMewala%20Maharajpur!5e0!3m2!1sen!2sin!4v1683891620836!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </div>

  );
}

export default HomeAbout;
