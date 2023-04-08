import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

const Book = () => {
  return (
    <>
      <section className="book_page">
            <div className="book_page_shape"></div>
            <Container>
                <Row>
                    <Col lg={12}>
                     <div className="book_now_inner d-flex align-items-center justify-content-between">
                        <div className="book_now_inner_left">
                            <span className="fs-md-1">Plan your trip with us</span>
                            <h1 className="text-light">Ready for an unforgetable tour?</h1>
                        </div>
                        <Button type="submit">BOOK TOUR</Button>
                     </div>
                    </Col>
                </Row>
            </Container>
      </section>
    </>
  )
}

export default Book
