import React from 'react'

const Top = () => {
  return (
    <>
      <div className="top_header">
        <div className="container">
          <div className="header_content_wrapper d-flex">
            <div className="top_left_content d-flex">
            <div className="tel_no me-4">
            <i className="bi bi-telephone-inbound"><span className="ms-2">+ 92 666 999 0000</span></i>
            </div>
                <div className="email">
                <i className="bi bi-at"><a href='#'><span className="ms-2">needhelp@company.com</span></a></i>
                </div>
               
            </div>
            <div className="top_right_content d-flex ms-auto text-light">
              <div className="social_media_icons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-pinterest"></i>
              </div>
              <div className="text">
                <h6>BECOME A LOCAL GUIDE</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Top
