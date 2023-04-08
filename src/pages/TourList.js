import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import PageBanner from '../components/PageBanner'
import Footer from '../components/Footer';
import TourInfo from '../components/TourInfo';


const TourList = () => {
  return (
    <>
      <PageBanner title="Tour lists"/>
      <section className="page_header py-3">
            <Container>
                <Nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/tours/tourList"><span>Tour</span></NavLink>
                </Nav>
            </Container>
        </section>
        <TourInfo/>
        <Footer/>
    </>
  )
}

export default TourList
