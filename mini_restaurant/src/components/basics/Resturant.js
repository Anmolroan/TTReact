import React from 'react'
import "./style.css"
import Menu from './menuApi.js'
function Resturant() {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className=" card-number card-circle subtle">1 </span>
            <span className=" card-author subtle" style={{color: 'red'}}>Breakfast</span>
            <h2 className="card-title"> Maggi</h2>
            <span className="card-description subtle">
            It is a long established fact that
             a reader will be distracted by the 
             readable content of a page when looking at its layout.
              The point of using Lorem Ipsum
              is tha
             t it has a more-or-less normal distri
             bution
            </span>
           <div className="card-read">Read</div>
          </div>
         <img src={image} alt="images" className="card-media"/>
         <span className="card-tag subtle"> order Now</span>
        </div>
      </div>
    </div>
  )
}

export default Resturant