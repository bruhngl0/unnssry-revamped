import React from 'react'
import "../styles/header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-main'>
        <div className='header-left'>
          <Link path to = "/" className='img-head'>
            <img src = "unnecessary.png"  className='img-head'/>
            </Link>
        </div>
        <div className='header-mid'>  
            <span>NEW ARRIVALS / </span>
            <span> MEN / </span>
            <span> WOMEN / </span>
            <span> ACCESSORIES / </span>
            <span> ARCHIVE / </span>
        </div>
    </div>
  )
}

export default Header