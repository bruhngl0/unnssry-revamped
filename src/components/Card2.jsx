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
              <img src="nine.png" className='card-image' alt="Product" style={{ transform: 'scale(1.2)', }}/>
            </div>
            <div className='card-des'>
              <p>COMMANDO OLIVE CHAIN SHIRT<br />4000</p>
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
              <img src="one.png" className='card-image' alt="Product" style={{ transform: 'scale(1.2)', }}/>
            </div>
            <div className='card-des'>
              <p>NOCTURNAL 10 POCKET PARADE<br />4000</p>
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
              <img src="thirtyone.png" className='card-image' alt="Product" style={{ transform: 'scale(1.2)', }}/>
            </div>
            <div className='card-des'>
              <p>ECLIPSE RIPPED JEANS <br />4000</p>
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
              <img src="thirtynine.png" className='card-image' alt="Product" style={{ transform: 'scale(1.2)', }}/>
            </div>
            <div className='card-des'>
              <p>CHARCOAL GRAY PINNACLE PANTS<br />4000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;