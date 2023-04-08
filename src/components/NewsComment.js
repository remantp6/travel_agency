import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

const NewsComment = () => {
    return (
        <>
            <div className="news_comment mb-lg-5">
                <Container className="px-0">
                    <Row>
                        <Col lg={10}>
                            <div className="comment_heading py-2 ps-3">
                                <h2>2 Comments</h2>
                            </div>
                            <div className="comment_content pt-lg-4">
                                <div className="comment_content_wrapper d-flex my-3">
                                    <span className="comment_content_left">
                                        <img src="https://tevily-nextjs.vercel.app/_next/static/media/comment-1-1.1af1d1a6.png" alt=""></img>
                                    </span>
                                    <span className="comment_content_right ms-lg-4">
                                        <span className="right_top d-flex justify-content-between my-lg-3">
                                            <h4>Kevin Martin</h4>
                                            <a href="#">Reply</a>
                                        </span>
                                        <p className="fs-5 mb-0">It has survived not only five centuries,
                                            but also the leap into electronic typesetting unchanged.
                                            It was popularised in the sheets containing lorem ipsum
                                            is simply free text available in the martket to use now.</p>
                                    </span>
                                </div>
                            </div>
                            <div className="comment_content py-lg-3 mb-lg-5">
                                <div className="comment_content_wrapper d-flex my-3">
                                    <span className="comment_content_left">
                                        <img src="https://tevily-nextjs.vercel.app/_next/static/media/comment-1-2.5df0094b.png" alt=""></img>
                                    </span>
                                    <span className="comment_content_right ms-lg-4">
                                        <span className="right_top d-flex justify-content-between my-lg-3">
                                            <h4>Sarah Albert</h4>
                                            <a href="#">Reply</a>
                                        </span>
                                        <p className="fs-5 mb-0">It has survived not only five centuries,
                                            but also the leap into electronic typesetting unchanged.
                                            It was popularised in the sheets containing lorem ipsum
                                            is simply free text available in the martket to use now.</p>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pb-lg-5">
                        <Col lg={8}>
                            <div className="comment_content_wrapper">
                                <span className="comment_heading px-4">
                                    <h2 className="pb-4">Leave a comment</h2>
                                </span>
                                <span className="comment_section py-0 px-4">
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Control placeholder="Your name" />
                                            </Col>
                                            <Col>
                                                <Form.Control placeholder="Email address" />
                                            </Col>
                                        </Row>
                                        <Row className="my-4">
                                            <Col>
                                                <Form.Control as="textarea" placeholder="Write something on it!!" rows={5} />
                                            </Col>
                                        </Row>
                                        <Button type="submit">SUBMIT COMMENT</Button>
                                    </Form>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default NewsComment
