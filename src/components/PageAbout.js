import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import { Col, Row } from 'react-bootstrap';

const PageAbout = () => {
  return (
    <>
      <div className="page_about my-lg-5">
        <Container>
            <Row>
                <Col lg={6}>
                    <section className="page_about_left">
                        <img src="https://tevily-nextjs.vercel.app/_next/static/media/about-page-img.9d9966a7.jpg" alt="image1" className="w-100"></img>
                    </section>
                </Col>
                <Col lg={6}>
                <div className="page_about_right px-3">
                   <div className="page_about_right_content">
                    <section className="page_about_right_title">
                    <span className="fs-3">Learn about us</span>
                    <h1>Dare to Explore with Tevily Agency</h1>
                    </section>
                    <section className="page_about_right_subtitle">
                        <h3 className="py-3 mb-0 fs-xl-1 py-xl-4">A Simply Perfect Place to Get Lost</h3>
                        <p>We are trusted by our clients and have a reputation for the best services in the field. Lorem 
                        ipsum is simply free text dolor sit amett consectetur adipiscing elit.
                         It is a long established fact that a reader will be distracted by the
                          readable content of a page.</p>
                    </section>
                    <section className="page_about_progress_bar py-xl-4">
                       <span className="progress_bar_single">
                        <h4>Best Services</h4>
                        <span className="bar">
                        <ProgressBar now={77} label={`${70}%`} />
                        </span>
                       </span>
                       <span className="progress_bar_single">
                        <h4 className="pt-3">Tour Agents</h4>
                        <span className="bar">
                        <ProgressBar now={37} label={`${40}%`} />
                        </span>
                       </span>
                    </section>
                   </div>
                </div>
                </Col>
            </Row>
        </Container>
      </div>
    </>
  )
}

export default PageAbout
