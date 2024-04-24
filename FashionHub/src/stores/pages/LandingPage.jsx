

import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'


const LandingPage = () => {
  return (
    <>
    <div>
        <Navbar />
        <img src='https://assets.dragonmart.ae//pictures/0103296_DragonMart_categorylisting_computer&electronics_1of3.jpeg' width='100%'></img>
        <Products />
    </div>
    </>
  )
}

export default LandingPage