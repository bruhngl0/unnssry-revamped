import React from 'react'


import Card from './Card'
import Content from './Content'
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
         

          <Card />
          <Content
        img = "artboard3.png"
        des = "SEASONAL KNITWEAR"
        link = "/pants" />

       <Card />
         
    </>
  )
}

export default Main