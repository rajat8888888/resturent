import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assest/pizza.jpeg'
import '../style/Home.css'

export const Home = () => {
  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Happy Pizza</h1>
            <p> Pizza To Fit Any Test</p>
            <Link to='/menu' >
            <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}
