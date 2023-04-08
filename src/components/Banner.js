import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

const Banner = () => {
  return (
    <>
      <Carousel className="home_carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-2.4865c85b.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Travel & Adventures</h1>
                    <p>Where Would You Like To Go?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-1.62fecf08.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>Travel & Adventures</h1>
                    <p>Where Would You Like To Go?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://tevily-nextjs.vercel.app/_next/static/media/main-slider-1-3.fe6aff2e.jpg"
                    alt="Third slide"/>
                <Carousel.Caption>
                    <h1>Travel & Adventures</h1>
                    <p>Where Would You Like To Go?</p>
                </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>
        <Container className="search_box py-0">
                <Row>
                    <Col xs={12} md={12} lg={3} className="px-5 border-end my-auto height">
                        <p>Where to</p>
                        <h6>Enter keywords</h6>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="px-5 border-end my-auto height"> <p>When</p>
                        <h6>03/18/2023</h6></Col>
                    <Col xs={12} md={6} lg={3} className="px-5 border-end my-auto pad"> <p>Type</p>
                        <h6>Adventure</h6></Col>
                    <Col xs={12} md={12} lg={3} className="text-center tour-search-one_button">
                    <h6 className="mb-0">FIND NOW</h6>
                    </Col>
                </Row>
            </Container>       
    </>
  )
}
export default Banner
