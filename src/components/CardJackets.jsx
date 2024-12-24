import React from 'react'
import "../styles/card.scss"

const CardJackets = (data) => {
    console.log(data.props)
  return (
    <div className='card-main'>
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
            <img src = {data.props[0].image}  className='cardPant-image'/>
           </div>

           <div className='card-des'>
           <p>{data.props[0].name} <br/> {data.props[0].price}</p>
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
            <img src = {data.props[1].image}  className='cardPant-image'/>
           </div>

           <div className='card-des'>
           <p>{data.props[1].name} <br/> {data.props[1].price}</p>
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
            <img src = {data.props[2].image}  className='cardPant-image'/>
           </div>

           <div className='card-des'>
           <p>{data.props[2].name} <br/> {data.props[2].price}</p>
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
            <img src = {data.props[3].image}  className='cardPant-image'/>
           </div>

           <div className='card-des'>
            <p>{data.props[3].name} <br/> {data.props[3].price}</p>
            
           </div>
        </div>
    </div>
  )
}

export default CardJackets