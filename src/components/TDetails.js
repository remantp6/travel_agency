import React from "react";
import CData from "../CData";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const TDetails = () => {
  
  return (
    <>
    <section className="tour_details">
      <Container className="pb-lg-5">
        <Row className="gx-4 pt-lg-5">
          {CData.map((record) => (
            <Col md={6} lg={4} className="px-2 pb-3">
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
            </Col>
          ))}
        </Row>
      </Container>
      </section>
    </>
  );
};

export default TDetails;
