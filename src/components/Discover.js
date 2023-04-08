import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'

const Discover = () => {
  return (
    <>
      <div className="destination_details_discover py-lg-5">
        <Container>
          <Row>
            <Col lg={7}  xl={8}>
              <div className="destination_details_discover_left">
                <h2 className="py-2 pb-3">Discover Spain</h2>
                <p classname="pt-3">Lorem ipsum available isn but the majority have suffered alteratin
                  in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit
                  auctor aliqueenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit. vulputate cursus a sit
                  amet mauris. Morbi accumsan ipsum veliam nec tellus a odio tincidunt auctor.</p>
                <p className="pt-4">There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some injected or words which don't look
                  even slightly believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isn't anything embarrassing hidden in the middle
                  of text. All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary,</p>
              </div>
            </Col>
            <Col lg={5} xl={4}>
              <div className="destination_details_right">
                <img src="https://tevily-nextjs.vercel.app/_next/static/media/destinations-details__discount-img.d695792a.jpg" alt="img" className="w-100"></img>
                <span className="destination_details_discount">
                  <h2>30%</h2>
                  <h3>Discount on Spain Tour</h3>
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} className="pt-lg-3 pb-lg-5">
              <div className="overview_section">
                <h2 className="pb-lg-3 pt-xl-5 pb-xl-4">Overview</h2>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordion_header">Why are your Tours so Expensive?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion_header">Why are your Tours so Expensive?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. 
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Discover
