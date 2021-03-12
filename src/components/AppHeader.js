import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AppHeader = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Container className={'pl-1'}>
        <Navbar.Brand>Personal Trainer</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/customersList" >Customers List</Nav.Link>
          <Nav.Link as={Link} to="/trainingsList">Trainings List</Nav.Link>
          <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default AppHeader;
