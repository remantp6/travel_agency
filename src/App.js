import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from './components/Top'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import DestinationDetails from './pages/DestinationDetails'
import TourList from './pages/TourList'
import TourDetails from './pages/TourDetails'
import About from './pages/About'
import NewsDetails from './pages/NewsDetails';
import Contact from './pages/Contact'


const App = () => {
  return (
    <>
    <BrowserRouter basename="/travel_agency">
      <Top/>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/destination/destinationDetails" element={<DestinationDetails/>} />
          <Route path="/tours/tourList" element={<TourList/>} />
          <Route path="/tours/tourDetails" element={<TourDetails/>} />
          <Route path="/pages/about" element={<About/>} />
          <Route path="/news/newsDetails" element={<NewsDetails/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


