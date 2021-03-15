import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const AppHeader = () => (

  // toDo - highlight selected tab

  <div>
    <Navbar bg="dark" variant="dark">
      <Container >
        <Navbar.Brand as={Link} to="/">Personal Trainer</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/customersList"> Customers List </Nav.Link>
          <Nav.Link as={Link} to="/trainingsList"> Trainings List </Nav.Link>
          <Nav.Link as={Link} to="/calendar"> Calendar </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default AppHeader;
