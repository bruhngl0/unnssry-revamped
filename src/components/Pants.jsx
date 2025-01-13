import React from 'react'
import CardPants from './CardPants'



import pant1 from "../../public/pants/py2.png"
import pant2 from "../../public/pants/py1.png"
import pant3 from "../../public/pants/Fur3.png"
import pant4 from "../../public/pants/Fur2.png"

import pant5 from "../../public/pants/Fur1.png"
import pant6 from "../../public/pants/y1.png"
import pant7 from "../../public/pants/y2.png"
import pant8 from "../../public/pants/pantss1.png"

import pant9 from "../../public/pants/pantss3.png"
import pant10 from "../../public/pants/pantss2.png"
import pant11 from "../../public/pants/Pantsss2.png"
import pant12 from "../../public/pants/Pantsss3.png"


import pant13 from "../../public/pants/Pantsss1.png"
import pant14 from "../../public/pants/Pants3.png"
import pant15 from "../../public/pants/Pants2.png"
import pant16 from "../../public/pants/Pants1.png"



import pant17 from "../../public/pants/Pj2.png"
import pant18 from "../../public/pants/Pj1.png"
import pant19 from "../../public/pants/Pj3.png"
import pant20 from "../../public/pants/Pjwhite.png"



import pant21 from "../../public/pants/Pjblue.png"
import pant22 from "../../public/pants/f1.png"
import pant23 from "../../public/pants/Jeans2.png"
import pant24 from "../../public/pants/pa11.png"






const Pants = () => {

    const pantSetOne = [
        {name: "SLATE SHADOW CARGO PANTS" , image: pant1 , price: "4000", description: "life is good"},
        {name: "SAND DUNE CARGO PANTS" , image: pant2, price: "4000", description: "life is good"},
        {name: "DESERT EXPLORER SUEDE UTILITY PANTS" , image: pant3, price: "4000", description: "life is good"},
        {name: "CHARCOAL MINE SUEDE UTILITY PANTS" , image: pant4, price: "4000", description: "life is good"},
    ]


    const pantSetTwo = [
        {name: "LAVENDER FEILD SUEDE UTILITY PANTS" , image: pant5, price: "4000", description: "life is good"},
        {name: "MUSTARD SEED CARGO PANTS" , image: pant6, price: "4000", description: "life is good"},
        {name: "MIDNIGHT BLACK CARGO PANTS" , image: pant7, price: "4000", description: "life is good"},
        {name: "TALE BLUE LAYERED POCKET TROUSERS" , image: pant8, price: "4000", description: "life is good"},
    ]



    const pantSetThree = [
        {name: "CRISP WHITE LAYERED POCKET TROUSERS" , image: pant9, price: "4000", description: "life is good"},
        {name: "PITCH DARK LAYERED POCKET TROUSERS" , image: pant10, price: "4000", description: "life is good"},
        {name: "FOREST RANGER CARGO PANTS" , image: pant11, price: "4000", description: "life is good"},
        {name: "IVORY EXPIDITION CARGO PANTS" , image: pant12, price: "4000", description: "life is good"},
    ]


    const pantSetFour = [
        {name: "MIDNIGHT EXPIDITION CARGO PANTS" , image: pant13, price: "4000", description: "life is good"},
        {name: "COFFEE BROWN UTILITY TROUSERS" , image: pant14, price: "4000", description: "life is good"},
        {name: "GHOST WHITE UTILITY TROUSERS" , image: pant15, price: "4000", description: "life is good"},
        {name: "MIDNIGHT BLACK UTILITY TROUSERS" , image: pant16, price: "4000", description: "life is good"},
    ]


    const pantSetFive = [
        {name: "MUSTARD CASUAL BUTTON TROUSERS" , image: pant17, price: "4000", description: "life is good"},
        {name: "BLACK CASUAL BUTTON TROUSERS" , image: pant18, price: "4000", description: "life is good"},
        {name: "NOCTURNAL 10 POCKET PARADE" , image: pant19, price: "4000", description: "life is good"},
        {name: "METROPOLITAN TROUSERS" , image: pant20, price: "4000", description: "life is good"},
    ]


    const pantSetSix = [
        {name: "AEGEAN TIDAL TROUSERS" , image: pant21, price: "4000", description: "life is good"},
        {name: "CHARCOAL GRAY PINNACLE PANTS" , image: pant22, price: "4000", description: "life is good"},
        {name: "PANAROMIC PORTHOLE PANTS" , image: pant23, price: "4000", description: "life is good"},
        {name: "ECLIPSE RIPPED JEANS" , image: pant24, price: "4000", description: "life is good"},
    ]




  return (
    <>
    <div className='header-cover'></div>
     <CardPants props={pantSetOne}/>
     <CardPants props= {pantSetTwo}/>
     <CardPants props= {pantSetThree}/>
     <CardPants props= {pantSetFour}/>
     <CardPants props= {pantSetFive}/>
     <CardPants props= {pantSetSix}/>
    </>
  )
}

export default Pants