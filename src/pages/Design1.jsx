import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img2.jpg'
import logo_1 from '../assets/membership.jpg'
import { Carousel, Col, Row } from 'react-bootstrap'

function Design1() {
  return (
    <div className='container'>
      <Row className="align-items-center">
        <Col lg={2}></Col>
        <Col lg={2}></Col>
        <Col lg={4}><ul className='d-flex list-unstyled justify-content-center gap-3 fw-bold'>
          <li>Home</li>
          <li>Dash board</li>
          <li>Products</li>
          <li>Transactions</li>
          <li>Journal</li>
        </ul></Col>
        <Col lg={2}></Col>
        <Col lg={2} className='text-center'>
          <img
            src="https://www.sbmultisitestg.siaincome.com/sites/siaincome/files/2023-04/Client-Accounts.png"
            width="140px"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <p>Joseph Lazar</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <h1>New Arrival</h1>
          <p className='fw-bold'><span className='text-decoration-underline '>JOIN</span> TODAY</p>
          <div className="new-arrival-header d-flex flex-column align-items-center ms-3">
            <img
              src={logo_1}
              alt="logo"
              width={'90%'}
              height={'80%'}
              className='' />
            <Link to={'/design2'}>
              <button className='p-1 mt-3 text-primary fw-bold' style={{ width: "200px", borderRadius: "25px", backgroundColor: "#eaeaea", boxShadow: "0 2px 2px black" }}>JOIN NOW</button>
            </Link>
          </div>
        </Col>
        <Col lg={1}></Col>
        <Col lg={7} style={{ marginTop: "60px" }}>
          <div className="premium-features d-flex flex-column justify-content-center">
            <h1 className="text-center" style={{color:"#00AD83"}}>Unlock Premium Features Now</h1>
            <div className="new-arrival-container">
              <div className="carousel-container">
                <Carousel interval={null} nextIcon={<span className="fa-solid fa-arrow-right fs-3" style={{ marginLeft: "180px", color: "black" }} />} prevIcon={<span className="fa-solid fa-arrow-left fs-3" style={{ marginRight: "180px", color: "black" }} />}>
                  <Carousel.Item>
                    <div className="d-flex gap-5 mt-5">
                      <div className="card-body" style={{ border: "2px solid black", borderRadius: "25px", overflow: "hidden" }}>
                        <img src={img1} alt="img-1" width={'100%'} />
                        <p className="card-text text-center justify-content-center fs-4 p-3" style={{ color: "#00AD83" }}>Lower Interest Rates</p>
                      </div>

                      <div className="card-body" style={{ border: "2px solid", borderRadius: "25px", overflow: "hidden" }}>
                        <img src={img2} alt="img-2" width={'100%'} />
                        <p className="card-text text-center justify-content-center fs-4 p-3" style={{ color: "#00AD83" }}>Interest Free Payments</p>
                      </div>

                      <div className="card-body" style={{ border: "2px solid", borderRadius: "25px", overflow: "hidden" }}>
                        <img src={img3} alt="img-3" width={'100%'} />
                        <p className="card-text text-center justify-content-center fs-4 p-3" style={{ color: "#00AD83" }} >Discount On Materials</p>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className='d-flex flex-column align-items-center mt-3'>
                <i class="fa-solid fa-ellipsis fs-4"></i>
                <button className='p-1 mt-2 text-light fw-bold' style={{ width: "280px", borderRadius: "25px", backgroundColor: "#00AD83", boxShadow: "0 2px 2px black" }}>UNLOCK NOW</button>
                <button className='p-1 mt-2 text-light fw-bold mt-3' style={{ width: "230px", borderRadius: "25px", backgroundColor: "#00AD83", boxShadow: "0 2px 2px black" }}>DETAILS</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

    </div>

  )
}

export default Design1