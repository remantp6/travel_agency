import React from 'react'
import Container from 'react-bootstrap/Container'

const Pagebanner = (props) => {
  return (
    <>
      <div className="page_banner">
        <section className="page_banner_img"></section>
        <Container>
            <span className="page_banner_top_title">
            <h1>{props.title}</h1>
            </span>
        </Container>
      </div>
    </>
  )
}

export default Pagebanner
