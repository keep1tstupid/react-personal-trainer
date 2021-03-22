import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const AppHeader = () => {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Container >
          <Navbar.Brand>Personal Trainer</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} exact to="/customersList"> Customers List </Nav.Link>
            <Nav.Link as={NavLink} exact to="/trainingsList"> Trainings List </Nav.Link>
            <Nav.Link as={NavLink} exact to="/calendar"> Calendar </Nav.Link>
            <Nav.Link as={NavLink} exact to="/statistics"> Statistics </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppHeader;
