import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import FlashSales from '../Components/FlashSales/FlashSales'
import BrowseCatagery from '../Components/BrowseCatagery/BrowseCatagery'
import SalingProducts from '../Components/SalingProducts/SalingProducts'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FlashSales/>
    <BrowseCatagery/>
    <SalingProducts/>
    </>
  )
}

export default HomePage
