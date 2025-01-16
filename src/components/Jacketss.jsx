import React from 'react'
import CardJackets from './CardJackets'



import jacket1 from "../../public/jackets/Puff1.png"
import jacket2 from "../../public/jackets/Puff2.png"
import jacket3 from "../../public/jackets/Puff3.png"
import jacket4 from "../../public/jackets/j1.png"

import jacket5 from "../../public/jackets/j2.png"
import jacket6 from "../../public/jackets/VEST1c.png"
import jacket7 from "../../public/jackets/VEST2c.png"
import jacket8 from "../../public/jackets/VEST3c.png"

import jacket9 from "../../public/jackets/VEST4c.png"
import jacket10 from "../../public/jackets/Puffer1.png"
import jacket11 from "../../public/jackets/Puffer2.png"
import jacket12 from "../../public/jackets/Puffer3.png"


import jacket13 from "../../public/jackets/Puffer5.png"
import jacket14 from "../../public/jackets/Puffer6.png"
import jacket15 from "../../public/jackets/black1.png"
import jacket16 from "../../public/jackets/mh.png"



import jacket17 from "../../public/jackets/mesh.png"
import jacket18 from "../../public/jackets/mesh1.png"
import jacket19 from "../../public/jackets/Sweater1.png"
import jacket20 from "../../public/jackets/Sweater2.png"










const Jacketss = () => {

    const jacketSetOne = [
        {name: "DESERT QUILTED BOMBER" , image: jacket1 , price: "4000", description: "life is good"},
        {name: "MIDNIGHT QUILTED BOMBER" , image: jacket2, price: "4000", description: "life is good"},
        {name: "CLOUD QUILTED BOMBER" , image: jacket3, price: "4000", description: "life is good"},
        {name: "OLIVE/BLEACH BLOCKED PUFFER" , image: jacket4, price: "4000", description: "life is good"},
    ]


    const jacketSetTwo = [
        {name: "GRAPHITE/SLATE BLOCKED PUFFER" , image: jacket5, price: "4000", description: "life is good"},
        {name: "IVORY POCKET GILET" , image: jacket6, price: "4000", description: "life is good"},
        {name: "COMMANDO POCKET GILET" , image: jacket7, price: "4000", description: "life is good"},
        {name: "MIDNIGHT POCKET GILET" , image: jacket8, price: "4000", description: "life is good"},
    ]



    const jacketSetThree = [
        {name: "SAFARI POCKET GILET" , image: jacket9, price: "4000", description: "life is good"},
        {name: "FROST WHISPER PUFFER" , image: jacket10, price: "4000", description: "life is good"},
        {name: "OLIVE HUSH PUFFER" , image: jacket11, price: "4000", description: "life is good"},
        {name: "TWILIGHT INSULATED PUFFER" , image: jacket12, price: "4000", description: "life is good"},
    ]


    const jacketSetFour = [
        {name: "MIDNIGHT POISE PUFFER" , image: jacket13, price: "4000", description: "life is good"},
        {name: "BLUSH FROST PUFFER" , image: jacket14, price: "4000", description: "life is good"},
        {name: "MIDNIGHT KNIT SWEATER" , image: jacket15, price: "4000", description: "life is good"},
        {name: "SAND KNIT SWEATER" , image: jacket16, price: "4000", description: "life is good"},
    ]


    const jacketSetFive = [
        {name: "ECLIPSE MESH PONCHO" , image: jacket17, price: "4000", description: "life is good"},
        {name: "DESERT MESH PONCHO" , image: jacket18, price: "4000", description: "life is good"},
        {name: "OLIVE FRAYED SWEATER" , image: jacket19, price: "4000", description: "life is good"},
        {name: "NOIR FRAYED SWEATER" , image: jacket20, price: "4000", description: "life is good"},
    ]


   




  return (
    <>
    <div className='header-cover'>
   
    </div>
    <div className='back-btn'>
    <button 
            className="back-btn1"
            onClick={() => window.history.back()}
          >
            ← BACK
    </button>
    </div>
    
     <CardJackets props={jacketSetOne}/>
     <CardJackets props= {jacketSetTwo}/>
     <CardJackets props= {jacketSetThree}/>
     <CardJackets props= {jacketSetFour}/>
     <CardJackets props= {jacketSetFive}/>
     
    </>
  )
}

export default Jacketss