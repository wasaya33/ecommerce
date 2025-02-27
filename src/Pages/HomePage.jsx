import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import FlashSales from '../Components/FlashSales/FlashSales'
import BrowseCatagery from '../Components/BrowseCatagery/BrowseCatagery'
import SalingProducts from '../Components/SalingProducts/SalingProducts'
import MusicExperience from '../Components/MusicExperience/MusicExperience'
import ExploreProducts from '../Components/ExploreProducts/ExploreProducts'
import Arrival from '../Components/Arrival/Arrival'
import Services from '../Components/Services/Services'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FlashSales/>
    <BrowseCatagery/>
    <SalingProducts/>
    <MusicExperience/>
    <ExploreProducts/>
    <Arrival/>
    <Services/>  
    <Footer/>
    </>
  )
}

export default HomePage
