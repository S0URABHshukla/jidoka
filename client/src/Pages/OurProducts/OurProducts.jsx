import React from 'react'
import SectionFirst from './Section-first/SectionFirst'
import OfferForYou from './OfferForYou/OfferForYou'
import SectionSecond from './SectionSecond/SectionSecond'
import SectionThird from './SectionThird/SectionThird'
import SectionFour from './SectionFour/SectionFour'
import SectionFive from './SectionFive/SectionFive'
import Introduction from './Introduction/Introduction'
import News from './News/News'

function OurProducts() {
  return (
    <div>
      <SectionFirst/>
      <OfferForYou/>
      <SectionSecond/>
      <SectionThird/>
      <SectionFour/>
      <SectionFive/>
      {/* <Introduction/> */}
      <News/>
    </div>
  )
}

export default OurProducts