import React from 'react'
import nav_icon from '../assets/real-estate-house.png'
import { Container, Navbar } from 'react-bootstrap'
import { MDBCol } from 'mdb-react-ui-kit'


function Header() {
  return (
    <Navbar style={{ backgroundColor: "rgb(235, 237, 238)", height: '60px' }}>
      <Container>
        <Navbar.Brand className='ms-5'>
          <img
            src={nav_icon}
            width="120px"
            alt="Logo"
            className='position-fixed'
          />
        </Navbar.Brand>
        <MDBCol fluid className='text-center fs-5 fw-bold'>XYZ SYSTEMS LLP.</MDBCol>
      </Container>
    </Navbar>

  )
}

export default Header