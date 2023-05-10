import React from 'react';
import './SectionFirst.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ImageSlider from '../ImageSlider/ImageSlider';
function SectionFirst() {
  return (
    <div className="SectionFirst">
      <div id="Product-ctgry">
        <div className="productHeader">Product category</div>
        <div className="prodDetail" style={{ paddingTop: '5px' }}>
          <div> Linear motion </div>
          <div>
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="prodDetail">
          <div> Transmission parts </div>
          <div>
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="prodDetail">
          <div> Rotational motion </div>
          <div>
            
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="prodDetail">
          <div> Positioning and fixing guide </div>
          <div>
            
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="prodDetail">
          <div> Pneumatic components </div>
          <div>
            
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="prodDetail">
          <div> Industrial frame structure </div>
          <div>
            
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="prodDetail">
          <div> Profiles and accessiories </div>
          <div>
            
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="prodDetail">
          <div> Function module </div>
          <div>
            
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="prodDetail">
          <div> Standard parts </div>
          <div>
            
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="prodDetail" style={{ paddingBottom: '9px' }}>
          <div> Functional materials </div>
          <div>
            
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>

      <div id="Slide-img">
        <ImageSlider />
      </div>
    </div>
  );
}

export default SectionFirst;
