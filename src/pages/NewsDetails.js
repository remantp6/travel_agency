import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import PageBanner from '../components/PageBanner'
import Footer from '../components/Footer';
import News from '../components/News';
import { Nav } from 'react-bootstrap';
import NewsComment from '../components/NewsComment';

const NewsDetails = () => {
  return (
    <>
      <PageBanner title="News Details"/>
      <section className="page_header py-3">
            <Container>
                <Nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/news/newsDetails"><span>News</span></NavLink>
                </Nav>
            </Container>
        </section>
        <News/>
        <NewsComment/>
        <Footer/>
    </>
  )
}

export default NewsDetails
