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
              <img src="thirtytwo.png" className='card-image' alt="Product" />
            </div>
            <div className='card-des'>
              <p>HALO WOOL MIX BEANIE <br />399,95 DKK</p>
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
              <img src="fiftyfive.png" className='card-image' alt="Product" />
            </div>
            <div className='card-des'>
              <p>HALO WOOL MIX BEANIE <br />399,95 DKK</p>
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
              <img src="twenty.png" className='card-image' alt="Product" />
            </div>
            <div className='card-des'>
              <p>HALO WOOL MIX BEANIE <br />399,95 DKK</p>
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
              <img src="twentyfour.png" className='card-image' alt="Product" />
            </div>
            <div className='card-des'>
              <p>HALO WOOL MIX BEANIE <br />399,95 DKK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;