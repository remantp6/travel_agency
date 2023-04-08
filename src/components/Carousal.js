import React from 'react'
import CData from '../CData';
import Container from 'react-bootstrap/Container'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from 'react-bootstrap/Card';

const options = {
   autoplay: true,
  autoplaySpeed: 1000,
   responsive: {
     0: {
       items: 1,
     },
     767: {
       items: 2,
     },
     991: {
       items: 3,
     },
     1200: {
       items: 4,
     },
     1400: {
       items: 4,
     },
   }, 
  };
const Carousal = ({title, heading}) => {

  return (
    <>
    <div className="feature_section pt-lg-5">
      <Container>
      <div className="feature_section_top text-center">
              <span className="feature_section_title_tagline">{title}</span>
              <h1 className="feature_section_title_title">{heading}</h1>
      </div>
      <div className="tour_details py-lg-5 mt-0">
      <OwlCarousel className='owl-theme' loop margin = {10} {...options}nav>
          {CData.slice(0, 4).map((record) => (
              <Card>
                <Card.Img variant="top" src={record.img}/>
                <i className="bi bi-heart-fill heart"></i>
                <Card.Body className="ms-lg-auto me-lg-auto">
                <Card.Text className="mb-0 py-2">
                <i className="bi bi-star-fill star"><span>{record.rating} Superb</span></i>
                  </Card.Text>
                  <Card.Title><h4>{record.title}</h4></Card.Title>
                  <Card.Text>
                    <p><span>${record.price}</span>/Per Person</p>
                    <div className="tour_period py-2">
                  {record.days}<span className="ps-2">Days Tour</span>
                  </div>
                  </Card.Text>
                </Card.Body>
              </Card>
          ))}
          </OwlCarousel>
          </div>
      </Container>
      </div>
    </>
  )
}

export default Carousal
