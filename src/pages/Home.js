import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import DestinationList from '../components/DestinationList'
import Footer from '../components/Footer'
import News from '../components/News'
import Carousal from '../components/Carousal'

const Home = () => {
  return (
    <>
      <Banner/>
      <DestinationList title="Destination lists" heading="Go Exotic Places"/>
      <About/>
      <Carousal title="Featured tours" heading="Most Popular Tours"/>
      <Carousal title="Featured tours" heading="Most Popular Tours"/>
      <Carousal title="Featured tours" heading="Most Popular Tours"/>
      <News title="From the blog post" heading="News & Articles"/>
      <Footer/>
    </>
  )
}

export default Home

