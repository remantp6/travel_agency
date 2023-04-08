import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import PageBanner from '../components/PageBanner'
import Footer from '../components/Footer';
import DestinationList from '../components/DestinationList';
import Discover from '../components/Discover';

const DestinationDetails = () => {
  return (
    <>
      <PageBanner title="Destination Details"/>
      <section className="page_header py-3 mb-0">
            <Container>
                <Nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/destination/destinationDetails"><span>Destination</span></NavLink>
                </Nav>
            </Container>
        </section>
        <DestinationList/>
        <Discover/>
        <Footer/>
    </>
  )
}

export default DestinationDetails
