import React from 'react'
import CardShirts from './CardShirts'



import shirt1 from "../../public/shirts/Jacket1.png"
import shirt2 from "../../public/shirts/Jacket2.png"
import shirt3 from "../../public/shirts/Jacket3.png"
import shirt4 from "../../public/shirts/Mesh_Shirt1.png"

import shirt5 from "../../public/shirts/Mesh_Shirt2.png"
import shirt6 from "../../public/shirts/sh1.png"
import shirt7 from "../../public/shirts/sh2.png"
import shirt8 from "../../public/shirts/sh3.png"

import shirt9 from "../../public/shirts/m1.png"
import shirt10 from "../../public/shirts/m2.png"
import shirt11 from "../../public/shirts/MO1.png"
import shirt12 from "../../public/shirts/MO2.png"


import shirt13 from "../../public/shirts/MO3.png"
import shirt14 from "../../public/shirts/tee1.png"
import shirt15 from "../../public/shirts/tee2.png"
import shirt16 from "../../public/shirts/hoodie1.png"



import shirt17 from "../../public/shirts/hoodie2.png"
import shirt18 from "../../public/shirts/hoodie3.png"
import shirt19 from "../../public/jackets/Sweater1.png"
import shirt20 from "../../public/jackets/Sweater2.png"










const Shirts = () => {

    const shirtSetOne = [
        {name: "PITCH DARK CHAIN SHIRT" , image: shirt1 , price: "4000", description: "life is good"},
        {name: "COMMANDO OLIVE CHAIN SHIRT" , image: shirt2, price: "4000", description: "life is good"},
        {name: "STREET GHOST CHAIN SHIRT" , image: shirt3, price: "4000", description: "life is good"},
        {name: "MATRIX CHECK SHIRT" , image: shirt4, price: "4000", description: "life is good"},
    ]


    const shirtSetTwo = [
        {name: "MONOCHROME CHECK SHIRT" , image: shirt5, price: "4000", description: "life is good"},
        {name: "IVORY TEXTURED SHIRT" , image: shirt6, price: "4000", description: "life is good"},
        {name: "MIDNIGHT TEXTURED SHIRT" , image: shirt7, price: "4000", description: "life is good"},
        {name: "EMERALD TEXTURED SHIRT" , image: shirt8, price: "4000", description: "life is good"},
    ]



    const shirtSetThree = [
        {name: "MAUVE SUEDE SHAKET" , image: shirt9, price: "4000", description: "life is good"},
        {name: "CHARCOAL SUEDE SHAKET" , image: shirt10, price: "4000", description: "life is good"},
        {name: "MAUVE SUEDE SHIRT" , image: shirt11, price: "4000", description: "life is good"},
        {name: "CHARCOAL POCKET SHIRT" , image: shirt12, price: "4000", description: "life is good"},
    ]


    const shirtSetFour = [
        {name: "FOREST GREEN POCKET SHIRT" , image: shirt13, price: "4000", description: "life is good"},
        {name: "IVORY STRIPE RUGBY POLO" , image: shirt14, price: "4000", description: "life is good"},
        {name: "SLATE STRIPE RUGBY POLO" , image: shirt15, price: "4000", description: "life is good"},
        {name: "CUSTORY CORDUROY HOODIE" , image: shirt16, price: "4000", description: "life is good"},
    ]


    const shirtSetFive = [
        {name: "MIDNIGHT CORDUROY HOODIE" , image: shirt17, price: "4000", description: "life is good"},
        {name: "PLUMHAZE CORDUROY HOODIE" , image: shirt18, price: "4000", description: "life is good"},
        {name: "OLIVE FRAYED SWEATER" , image: shirt19, price: "4000", description: "life is good"},
        {name: "NOIR FRAYED SWEATER" , image: shirt20, price: "4000", description: "life is good"},
    ]


   




  return (
    <>
    <div className='header-cover'></div>
    <div className='back-btn'>
    <button 
            className="back-btn1"
            onClick={() => window.history.back()}
          >
            ← BACK
    </button>
    </div>
     <CardShirts props={shirtSetOne}/>
     <CardShirts props= {shirtSetTwo}/>
     <CardShirts props= {shirtSetThree}/>
     <CardShirts props= {shirtSetFour}/>
     <CardShirts props= {shirtSetFive}/>
     
    </>
  )
}

export default Shirts