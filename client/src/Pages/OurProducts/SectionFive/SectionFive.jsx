import React, { useEffect, useState } from 'react'
import "./SectionFive.css"
import { products } from '../../products'


function SectionFive() {
  
  return (
    <div className='sectionSecond'>
        <div id='fa-ctgrymodule'>
        <div className='faFirstmodule'>Function Module</div>
        <div className='fa-feature'>
            <p>. Recommend</p>
            <p>. High quality products</p>
            <p>&nbsp; constantly</p>
        </div>
        </div>

        <div id='faparts'>
        {products?.map((e,i)=>
        {
          return <div key={i} className='productlist' style={{color:"black",border:"1px solid #c0c0c0"}}>
            <img src={e.image} alt={e.name} />
            <p className='productlistName'>{e.name}</p>
          </div>
        })}
      </div>
        
    </div>
  )
}

export default SectionFive