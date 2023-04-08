import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

const ContactInfo = () => {
  return (
    <>
      <div className="contact_page my-lg-5">
        <div className="contact_page_top py-lg-4">
          <Container className="py-lg-4">
            <Row className="contact-sm">
              <Col xs={8} lg={4} className="px-4 py-lg-5 pb-4">
                <span className="contact_page_top_left">
                  <p className="mb-0">Talk with our team</p>
                  <h1>Any Question? Feel Free to Contact</h1>
                </span>
              </Col>
              <Col xs={12} lg={8}>
                <span className="contact_page_top_right">
                  <Form>
                    <Row className="mt-sm-3">
                      <Col>
                        <Form.Control placeholder="Your name" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Email address" />
                      </Col>
                    </Row>
                    <Row className=" my-3 mb-lg-5 mt-lg-4">
                    <Col>
                      <Form.Control as="textarea" placeholder="Write something on it!!" rows={4} />
                      </Col>
                    </Row>
                    <Button type="submit">SEND A MESSAGE</Button>
                  </Form>
                </span>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact_page_bottom p-5 py-sm-5 py-lg-4">
          <Container>
            <Row className="py-lg-5">
              <Col xs={12} sm={10} lg={4}>
                <div className="location_information d-flex align-items-center p-5 p-lg-5">
                  <span className="icon_place px-3  py-2">
                  <i class="bi bi-geo-alt fs-3"></i>
                  </span>
                  <span className="information_text fs-5 ps-3">
                    <p className="mb-0">88 Broklyn Street</p>
                    <p className="mb-0">Road New York. USA</p>
                  </span>
                </div>
              </Col>  
              <Col xs={12} sm={10} lg={4}>
                <div className="location_information d-flex align-items-center p-5 p-lg-5">
                  <span className="icon_place px-3  py-2">
                  <i className="bi bi-telephone fs-3"></i>
                  </span>
                  <span className="information_text fs-5 ps-3">
                    <p className="mb-0">88 Broklyn Street</p>
                    <p className="mb-0">Road New York. USA</p>
                  </span>
                </div>
              </Col>  
              <Col xs={12} sm={10} lg={4}>
                <div className="location_information d-flex align-items-center p-5 p-lg-5">
                  <span className="icon_place px-3  py-2">
                  <i className="bi bi-at fs-3"></i>
                  </span>
                  <span className="information_text fs-5 ps-3">
                    <p className="mb-0">88 Broklyn Street</p>
                    <p className="mb-0">Road New York. USA</p>
                  </span>
                </div>
              </Col>  
            </Row>
          </Container>
        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96771.87096566847!2d-74.13877137167025!3d40.71535345116716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d225bfafdd%3A0x249f013a2cd25d9!2sJersey%20City%2C%20NJ%2C%20USA!5e0!3m2!1sen!2snp!4v1679733985823!5m2!1sen!2snp" 
      width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

    </>
  )
}

export default ContactInfo
