import React from 'react'
import "../styles/cardjacket.scss"

const CardPants = (data) => {
    console.log(data.props)
  return (

    <div className='cardjacket-main'>
        <div className='cardjacket-container'>
           <div className='cardjacket-image-div'>
           <div className='cardjacket-top-left-absolute'>
                <div className='cardjacket-top-left-absolute-one'>
                   <p>UNISEX</p>
                </div>

                <div className='cardjacket-top-left-absolute-two'>
                  <p>NEW</p>
                </div>
            </div>
            <img src = {data.props[0].image}  className='cardPantjacket-image'/>
           </div>

           <div className='cardjacket-des'>
            <p>{data.props[0].name} </p>
            
           </div>
        </div>

        <div className='cardjacket-container'>
           <div className='cardjacket-image-div'>
           <div className='cardjacket-top-left-absolute'>
                <div className='cardjacket-top-left-absolute-one'>
                   <p>UNISEX</p>
                </div>

                <div className='cardjacket-top-left-absolute-two'>
                  <p>NEW</p>
                </div>
            </div>
            <img src = {data.props[1].image}  className='cardPantjacket-image'/>
           </div>

           <div className='cardjacket-des'>
           <p>{data.props[1].name} </p>
           </div>
        </div>

        <div className='cardjacket-container'>
           <div className='cardjacket-image-div'>
           <div className='cardjacket-top-left-absolute'>
                <div className='cardjacket-top-left-absolute-one'>
                   <p>UNISEX</p>
                </div>

                <div className='cardjacket-top-left-absolute-two'>
                  <p>NEW</p>
                </div>
            </div>
            <img src = {data.props[2].image}  className='cardPantjacket-image'/>
           </div>

           <div className='cardjacket-des'>
           <p>{data.props[2].name}</p>
           </div>
        </div>

        <div className='cardjacket-container'>
           <div className='cardjacket-image-div'>
           <div className='cardjacket-top-left-absolute'>
                <div className='cardjacket-top-left-absolute-one'>
                   <p>UNISEX</p>
                </div>

                <div className='cardjacket-top-left-absolute-two'>
                  <p>NEW</p>
                </div>
            </div>
            <img src = {data.props[3].image}  className='cardPantjacket-image'/>
           </div>

           <div className='cardjacket-des'>
            <p>{data.props[3].name} </p>
            
           </div>
        </div>
    </div>
  )
}

export default CardPants