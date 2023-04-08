import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

const DestinationList = ({title, heading}) => {
    return (
        <>
            <section className="destination_one py-xxl-5">
                <Container>
                    <section className="section_title text-center pb-lg-4">
                        <span className="section_title_tagline">{title}</span>
                        <h1 className="section_title_title">{heading}</h1>
                    </section>
                    <section className="image_layout py-lg-2">
                        <Row className="gx-3 pb-xxl-3">
                            <Col lg={3} className="con">
                                <img src="https://tevily-nextjs.vercel.app/_next/static/media/destination-1-1.f32b89c3.png" alt="" className="w-100"></img>
                                <span className="destination_one_content">
                                    <h2 className="destinations-one__title">Spain</h2>
                                </span>
                            </Col>
                            <Col lg={6} className="con"><img src="https://tevily-nextjs.vercel.app/_next/static/media/destination-1-2.6b007ca8.png" alt="" className="w-100"></img>
                                <span className="destination_one_content">
                                    <p className="destinations-one__sub-title">Wildlife</p>
                                    <h2 className="destinations-one__title">Thailand</h2>
                                </span>
                            </Col>
                            <Col lg={3} className="con"><img src="https://tevily-nextjs.vercel.app/_next/static/media/destination-1-3.d37d50e6.png" alt="" className="w-100"></img>
                                <span className="destination_one_content">
                                    <h2 className="destinations-one__title">Africa</h2>
                                </span>
                            </Col>
                        </Row>
                        <Row className="gx-3">
                            <Col lg={6} className="con"><img src="https://tevily-nextjs.vercel.app/_next/static/media/destination-1-4.0ba8a85a.png" alt="" className="w-100"></img>
                                <span className="destination_one_content">
                                    <h2 className="destinations-one__title">Australia</h2>
                                </span>
                            </Col>
                            <Col lg={6} className="con"><img src="https://tevily-nextjs.vercel.app/_next/static/media/destination-1-5.a1a8d71b.png" alt="" className="w-100"></img>
                                <span className="destination_one_content">
                                    <p className="destinations-one__sub-title">Adventure</p>
                                    <h2 className="destinations-one__title">Switzerland</h2>
                                </span>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </section>
        </>
    )
}

export default DestinationList
