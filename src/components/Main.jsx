import React from 'react'
import Card2 from './Card2'
import Card3 from "./Card3"

import Card from './Card'
import Content from './Content'
import { GiCard3Clubs } from 'react-icons/gi'
const Main = () => {
  return (
    <>
      <Content 
          img = "artboard1.png"
          des = "THE GIFT GUIDE EDIT"
          link = "/jackets" />
             
        <Card />
      
    
        <Content
        img = "artboard2.png"
        des = "THE ICONIC FLEECES"
        link = "/shirts" />
         

          <Card2 />
          <Content
        img = "artboard3.png"
        des = "SEASONAL KNITWEAR"
        link = "/pants" />

       <Card3 />
         
    </>
  )
}

export default Main