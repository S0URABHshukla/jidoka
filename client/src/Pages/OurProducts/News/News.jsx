import React from 'react'
import "./News.css"
function News() {
  return (
    <div className='news'>
        <div className='newz'>
            <div className='newsArticle'>
                <div className='vert'><span>|</span> News</div>
                <div className='read'>Read more</div>        
            </div>
            <div className='newsDetails'>
                <p>2023-04-27 &nbsp; 16:32:34 </p>
                <p>2023 International Labor Day Holiday Notice</p>
            </div>
            <div className='newsDetails'>
                <p>2023-01-04 &nbsp; 15:01:54 </p>
                <p>Notice on New Year's Day Holiday in 2023</p>
            </div>
            <div className='newsDetails'>
                <p>2022-12-29 &nbsp; 17:36:37 </p>
                <p>Notice on the 2023 Spring Festival Holiday</p>
            </div>
        </div>
        <div className='newz'>
            <div className='newsArticle'>
                <div className='vert'><span>|</span> Product Articles and Guides</div>
                <div className='read'>Read more</div>
                
            </div>
            <div className='newsDetails'>
                <p>2023-04-27 &nbsp; 16:32:34 </p>
                <p>2023 International Labor Day Holiday Notice</p>
            </div>
            <div className='newsDetails'>
                <p>2023-01-04 &nbsp; 15:01:54 </p>
                <p>Notice on New Year's Day Holiday in 2023</p>
            </div>
        </div>
    </div>
  )
}

export default News