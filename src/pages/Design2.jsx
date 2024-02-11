import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import logo from '../assets/celeb.png'

function Design2() {
  return (
    <>
    <div>
    <Container>
        <Row>
          <Col lg={5} className='mt-5'>
          <h1 className='text-primary ms-2'>Unlock Exclusive Benefits</h1>
            <Form className='d-flex flex-column'>
              <label className=' ms-2'>PHONE NUMBER</label>
              <div className='d-flex mt-2'>
              <Form.Select class="form-select form-select-lg form-control" aria-label="Large select example" style={{border:"2px solid black",borderRadius:"25px"}}>
                <option selected>+91 India</option>
                <option value="1">+86 China</option>
                <option value="2">+33 France</option>
                <option value="3">+1 USA</option>
              </Form.Select>
              <input type="text"label='Number input'placeholder='9876543210' className='ms-3 p-2 form-control' style={{border:"2px solid black",borderRadius:"25px"}} />
              </div>
              <label className=' ms-2 mt-3'>NAME</label>
              <input type="text"label='Number input' className='mt-2 p-2 form-control'  style={{border:"2px solid black",borderRadius:"25px", paddingLeft:"10px"}} />
              <label className=' ms-2 mt-3'>EMAIL [OPTIONAL]</label>
              <input type="email"label='Number input' className='mt-2 p-2 form-control' style={{border:"2px solid black",borderRadius:"25px", paddingLeft:"10px"}} />
              <button className='fs-5 mt-5 bg-primary text-light fw-bold form-control' style={{ borderRadius: "25px", boxShadow:"0 2px 2px black"}}>CONTINUE</button>
              <p className='mt-3 text-secondary'>Get ready to receive a secret code (OTP) on your phone</p>
            </Form>
          </Col>
          <Col lg={7}>
            <img 
            src={logo}
            width={'100%'}
            height={'100%'}
            alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Design2