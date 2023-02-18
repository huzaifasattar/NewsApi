import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className='sticky'>
        <Container>
          <Navbar.Brand href="#home">NEWS API</Navbar.Brand>
          <Nav className="me-auto">
           
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
