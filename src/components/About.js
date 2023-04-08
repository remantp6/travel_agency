import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

const About = () => {
  return (
    <>
      <section className="about_one">
        <div className="about_one_call d-flex align-items-center">
          <span className="about_one_call_icon">
            <i className="bi bi-telephone-inbound fs-4"></i>
          </span>
          <span className="about_one_call_number ps-4">
            <span className="call_title">BOOK TOUR NOW</span>
            <h5>666-888-0000</h5>
          </span>
        </div>
        <Container>
          <Row className="gx-4 ">
            <Col lg={12} xl={6} className="about_one_left">
              <div className="about_one_imgBox">
                <div className="about_one_img">
                  <img src="https://tevily-nextjs.vercel.app/_next/static/media/about-one-img-1.e526a0a5.png" alt="" className='w-100'></img>
                </div>
                <div className="about_one_discount">
                  <span className="fs-1">30%</span>
                  <h1>Discount</h1>
                </div>
              </div>
            </Col>
            <Col lg={12} xl={6} className="about_one_right pt-xxl-5">
              <div className="about_one_content pt-xxl-5">
                <section className="about_title">
                  <span className="about_title_tagline fs-3">Get to know us</span>
                  <h1 className="about_title_title">Plan Your Trip with Trevily</h1>
                  <img src="https://tevily-nextjs.vercel.app/_next/static/media/about-one-shape-2.8a3e5cec.png" alt="" width="220px"></img>
                </section>
                <section className="about_para_content my-3 py-xxl-2">
                  <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                </section>
                <ul className="about_one__points mb-4">
                  <li><i class="bi bi-check-circle"></i>Invest in your simply neighborhood</li>
                  <li><i class="bi bi-check-circle"></i>Support people in free text extreme need</li>
                  <li><i class="bi bi-check-circle"></i>Largest global industrial business community</li>
                </ul>
                <button className="about_one__btn">Book with us now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About
