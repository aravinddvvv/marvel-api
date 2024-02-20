import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <center>
            <img id='marvel' 
              src="./images/logo.png"
              width="230"
              height="90"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              
            />
            </center>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header