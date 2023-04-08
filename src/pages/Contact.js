import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner'
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <>
      <PageBanner title="Contact"/>
      <section className="page_header py-3">
            <Container>
                <Nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/contact"><span>Contact</span></NavLink>
                </Nav>
            </Container>
        </section>
      <ContactInfo/>
      <Footer/>
    </>
  )
}

export default Contact
