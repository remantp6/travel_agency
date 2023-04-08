import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import PageBanner from '../components/PageBanner'
import Footer from '../components/Footer';
import TDetails from '../components/TDetails';

const TourDetails = () => {
  return (
    <>
      <PageBanner title="Tour Details"/>
      <section className="page_header py-3">
            <Container>
                <Nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/tours/tourDetails"><span>Tour</span></NavLink>
                </Nav>
            </Container>
        </section>

        <TDetails/>
        <Footer/>
    </>
  )
}

export default TourDetails
