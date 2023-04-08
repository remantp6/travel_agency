import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

const News = ({title, heading}) => {
  return (
    <>
      <div className="news_one pb-lg-5">
        <Container>
          <div className="news_one_top d-flex pb-5">
            <section className="news_one_top_left">
              <span className="news_one_title_tagline">{title}</span>
              <h1 className="news_one_title_title">{heading}</h1>
            </section>
            <section className="news_one_top_right  ms-lg-auto">
              <button>VIEW ALL POSTS</button>
            </section>
          </div>
          <div className="news_one_bottom">
            <Row>
              <Col xs={12} md={12} lg={4} className="news_box">
                <div className="news_one_img_content">
                  <img src="https://tevily-nextjs.vercel.app/_next/static/media/news-one-img-3.de2a706e.jpg" alt="" className="w-100"></img>
                  <span className="news_one_date">
                    <span className="d-block">28</span>
                    <span className="d-block">Aug</span>
                  </span>
                </div>
                <div className="news_one_content">
                  <ul className="news_one_meta d-flex pt-4 pb-0 mb-0">
                    <li className="pe-4"><a href="#"><i class="bi bi-person"></i>Admin</a></li>
                    <li><a href="#"><i class="bi bi-chat"></i>2<span>comments</span></a></li>
                  </ul>
                  <h4>Travel the Most Beautiful Places in the World</h4>
                </div>
              </Col>
             <Col xs={12} md={12} lg={4} className="news_box">
                <div className="news_one_img_content">
                  <img src="https://tevily-nextjs.vercel.app/_next/static/media/news-one-img-1.24849fac.jpg" alt="" className="w-100"></img>
                  <span className="news_one_date">
                    <span className="d-block">28</span>
                    <span className="d-block">Aug</span>
                  </span>
                </div>
                <div className="news_one_content">
                  <ul className="news_one_meta d-flex pt-4 pb-0 mb-0">
                    <li className="pe-4"><a href="#"><i class="bi bi-person"></i>Admin</a></li>
                    <li><a href="#"><i class="bi bi-chat"></i>2<span>comments</span></a></li>
                  </ul>
                  <h4>Things to See and Do When Visiting Japan</h4>
                </div>
              </Col>
              <Col xs={12} md={12} lg={4} className="news_box">
                <div className="news_one_img_content">
                  <img src="https://tevily-nextjs.vercel.app/_next/static/media/news-one-img-2.ca8b0dda.jpg" alt="" className="w-100"></img>
                  <span className="news_one_date">
                    <span className="d-block">28</span>
                    <span className="d-block">Aug</span>
                  </span>
                </div>
                <div className="news_one_content">
                  <ul className="news_one_meta d-flex pt-4 pb-0 mb-0">
                    <li className="pe-4"><a href="#"><i className="bi bi-person"></i>Admin</a></li>
                    <li><a href="#"><i className="bi bi-chat"></i>2<span>comments</span></a></li>
                  </ul>
                  <h4>Journeys are Best Measured in New Friends</h4>
                </div>
              </Col> 
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default News
