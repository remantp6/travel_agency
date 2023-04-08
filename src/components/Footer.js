import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ScrollTop from './ScrollTop'

const Footer = () => {
  return (
    <>
      <footer className="site_footer pt-5">
        <div className="site_footer_top py-xs-5">
          <Container>
            <div className="site_footer_top_inner">
              <Row>
                <Col lg={4}  md={6} className="px-xs-4">
                  <div className="footer-widget__column_top">
                    <span className="footer-widget__logo">
                      <NavLink to="/">
                        <img src="https://tevily-nextjs.vercel.app/_next/static/media/footer-logo.2eb548ed.png" alt="Tevily" />
                      </NavLink>
                    </span>
                    <p className="my-4">Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.</p>
                  </div>
                  <div className="footer-widget__column_bottom">
                    <ul className="footer-items">
                      <li><i class="bi bi-telephone pe-2"></i>+ 92 666 999 0000</li>
                      <li><i class="bi bi-envelope pe-2"></i>needhelp@company.com</li>
                      <li><i class="bi bi-geo-alt pe-2"></i>666 road, broklyn street new york</li>
                    </ul>
                  </div>
                </Col>
                <Col lg={2} md={6}>
                  <div className="footer-widget__column_top">
                    <h4 className="py-2">Company</h4>
                  </div>
                  <div className="footer-widget__column_bottom">
                    <Nav>
                      <Nav.Link href="#">About Us</Nav.Link>
                      <Nav.Link href="#">Community Blog</Nav.Link>
                      <Nav.Link href="#">Rewards</Nav.Link>
                      <Nav.Link href="#">Work with Us</Nav.Link>
                      <Nav.Link href="#">Meet the Team</Nav.Link>
                    </Nav>
                  </div>
                </Col>
                <Col lg={2}  md={6}>
                  <div className="footer-widget__column_top">
                    <h4 className="py-2">Explore</h4>
                  </div>
                  <div className="footer-widget__column_bottom">
                    <Nav>
                      <Nav.Link href="#">Account</Nav.Link>
                      <Nav.Link href="#">Affilitate Program</Nav.Link>
                      <Nav.Link href="#">Contact</Nav.Link>
                      <Nav.Link href="#">Privacy Policy</Nav.Link>
                      <Nav.Link href="#">Legal</Nav.Link>
                    </Nav>
                  </div>
                </Col>
                <Col lg={4}  md={6}>
                  <div className="footer-widget__column_top">
                    <h4 className="py-3">Newsletter</h4>
                  </div>
                  <div className="footer-widget__column_bottom pb-lg-4">
                    <Form className="pb-3">
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form>
                    <Button type="submit">Subscribe</Button>
                    <ul className="ms-0 ps-0 py-4">
                      <li><i className="bi bi-check-circle pe-2"></i>I agree to all terms and policies</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="site_footer_bottom ms-auto ps-0 mb-auto mt-5">
          <Container className="ps-0 ms-0 pe-md-0">
            <Row>
              <Col className="ps-0 ms-0">
                <div className="site_footer__bottom_inner d-flex">
                  <div className="site_footer__bottom_left_arrow px-lg-5">
                  <ScrollTop/>
                  </div>  
                    <div className="site_footer__bottom_right px-lg-5">
                      <div className="footer_widget__social_icons ps-md-5 ps-lg-2">
                        <NavLink to="https://twitter.com/"> <i class="bi bi-twitter"></i></NavLink>
                        <NavLink to="https://www.facebook.com/"><i class="bi bi-facebook"></i></NavLink>
                        <NavLink to="https://www.pinterest.com/"><i class="bi bi-pinterest"></i></NavLink>
                        <NavLink to="https://www.instagram.com/"><i class="bi bi-instagram"></i></NavLink>
                      </div>
                    </div>
                    <div className="site-footer__bottom_right ms-md-auto">
                      <p className="ms-sm-5 ps-sm-5">@ All Copyright 2023</p>
                    </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
