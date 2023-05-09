import React from 'react'
import "./SectionSecond.css"
import {useNavigate } from 'react-router-dom'
import {products} from "../../products.js"

function SectionSecond() {
  const navigate=useNavigate();
  return (
    <div className='sectionSecond'>
        <div id='fa-ctgry'>
        <div className='faFirst'>FA Parts</div>
        <div className='fa-feature'>
            <p>. Fast delivery</p>
            <p>. High quality</p>
            <p>. Affordable price</p>
            <p>. Factory automation </p>
            <p>&nbsp; components</p>
        </div>
        </div>

      <div id='faparts'>
        {products?.map((e,i)=>
        {
          return  <div onClick={()=>navigate(`/productModel/${e.id}`)} key={i} className='productlist' style={{color:"black",border:"1px solid #c0c0c0"}}>
            <img src={e.image} alt={e.image} />
            <p className='productlistName'>{e.name}</p>
          </div>
          
        })}
      </div>
        
    </div>
  )
}

export default SectionSecond