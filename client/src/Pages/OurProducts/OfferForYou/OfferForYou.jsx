import React from 'react'
import "./OfferForYou.css"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function OfferForYou() {
  return (
    <div className='offer'>
        <div id='offer-header'>
            Offer you more
        </div>
        <div className='offer-details'>
            <div className='flex' style={{background:"#44BCBC"}}>
                <div>Quality assurance, assured procurement</div>
                <div > <WorkspacePremiumIcon style={{fontSize:"50px"}}/> </div>
            </div>
            <div className='flex' style={{background:"#D96E6E"}}>
                <div>Massive inventory, SKU 1100000+</div>
                <div> <WorkspacePremiumIcon style={{fontSize:"50px"}}/> </div>
            </div>
            <div className='flex' style={{background:"#F09B2B"}}>
                <div>Unconditional free shiping</div>
                <div> <WorkspacePremiumIcon style={{fontSize:"50px"}}/> </div>
            </div>
            <div className='flex' style={{background:"#5E9DD7"}}>
                <div>3D Drawing File</div>
                <div> <WorkspacePremiumIcon style={{fontSize:"50px"}}/> </div>
            </div>
        </div>
        
      </div>
  )
}

export default OfferForYou