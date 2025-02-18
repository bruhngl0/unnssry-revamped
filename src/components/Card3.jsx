// Card.jsx
import React from 'react';
import "../styles/card.scss";

const Card = () => {
  return (
    <div className='card-grid-wrapper'>
      <div className='card-grid'>
        <div className='card-row'>
          {/* First Row */}
          <div className='card-container'>
            <div className='card-image-div'>
              <div className='card-top-left-absolute'>
                <div className='card-top-left-absolute-one'>
                  <p>UNISEX</p>
                </div>
                <div className='card-top-left-absolute-two'>
                  <p>NEW</p>
                </div>
              </div>
              <img src="thirtynine.png" className='card-image' alt="Product" style={{ transform: 'scale(1.2)', }}/>
            </div>
            <div className='card-des'>
              <p>CHARCOAL GRAY PANTS </p>
            </div>
          </div>

          <div className='card-container'>
            <div className='card-image-div'>
              <div className='card-top-left-absolute'>
                <div className='card-top-left-absolute-one'>
                  <p>UNISEX</p>
                </div>
                <div className='card-top-left-absolute-two'>
                  <p>NEW</p>
                </div>
              </div>
              <img src="twentyone.png" className='card-image' alt="Product" style={{ transform: 'scale(1.2)', }}/>
            </div>
            <div className='card-des'>
              <p>IVORY TEXTURED SHIRT </p>
            </div>
          </div>
        </div>

        <div className='card-row'>
          {/* Second Row */}
          <div className='card-container'>
            <div className='card-image-div'>
              <div className='card-top-left-absolute'>
                <div className='card-top-left-absolute-one'>
                  <p>UNISEX</p>
                </div>
                <div className='card-top-left-absolute-two'>
                  <p>NEW</p>
                </div>
              </div>
              <img src="seventeen.png" className='card-image' alt="Product" style={{ transform: 'scale(1.2)', }} />
            </div>
            <div className='card-des'>
              <p>SAND KNIT SWEATER </p>
            </div>
          </div>

          <div className='card-container'>
            <div className='card-image-div'>
              <div className='card-top-left-absolute'>
                <div className='card-top-left-absolute-one'>
                  <p>UNISEX</p>
                </div>
                <div className='card-top-left-absolute-two'>
                  <p>NEW</p>
                </div>
              </div>
              <img src="fifteen.png" className='card-image' alt="Product" style={{ transform: 'scale(1.2)', }} />
            </div>
            <div className='card-des'>
              <p>MIDNIGHT EXPIDITION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;