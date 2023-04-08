import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import PageBanner from '../components/PageBanner'
import Footer from '../components/Footer';
import PageAbout from '../components/PageAbout';
import Book from '../components/Book';

const About = () => {
  return (
    <>
      <PageBanner title="Page Details"/>
      <section className="page_header py-3">
            <Container>
                <Nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/pages/about"><span>About</span></NavLink>
                </Nav>
            </Container>
        </section>
        <PageAbout/>
        <Book/>
        <Footer/>
    </>
  )
}

export default About
