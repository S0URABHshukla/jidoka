import React, { useEffect, useState } from 'react'
import "./SectionThird.css"
import { products } from '../../products'
import { useNavigate } from 'react-router-dom';

function SectionThird() {
  const navigate=useNavigate();
  
  return (
    <div className='sectionSecond'>
        <div id='indus-ctgry'>
        <div className='indus'>Industrial Aluminum</div>
        <div className='fa-feature'>
            <p>. Recommend</p>
            <p>. High quality products</p>
            <p>&nbsp; constantly</p>
        </div>
        </div>

        <div id='faparts'>
        {products?.map((e,i)=>
        {
          return <div onClick={()=>navigate(`/productModel/${e.id}`)} key={i} className='productlist' style={{color:"black",border:"1px solid #c0c0c0"}}>
            <img src={e.image} alt={e.name} />
            <p className='productlistName'>{e.name}</p>
          </div>
        })}
      </div>
        
    </div>
  )
}

export default SectionThird