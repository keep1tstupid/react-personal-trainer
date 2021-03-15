import React, { useState } from 'react';
import { Container, Modal, Form, Col, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import { addNewCustomer } from "../../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCustomer = (props) => {
  const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    streetaddress: '',
    postcode: '',
    city: '',
    email: '',
    phone: '',
  }

  const [show, setShow] = useState(false);
  const [customer, setCustomer] = useState(INITIAL_STATE);

  const reload = () => window.location.reload();

  const handleClose = () => {
    setShow(false);
    setCustomer(INITIAL_STATE);
  }

  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setCustomer({...customer, [event.target.name]: event.target.value})
  }

  const dispatch = useDispatch();

  const handleSave = () => {
    console.log(JSON.stringify(customer));
    dispatch(addNewCustomer(customer));
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className={'ml-3 mr-3'}>
        Add New Customer
      </Button>

      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        show={show}
        onHide={handleClose}
        onExit={reload}
      >
        <Modal.Header closeButton>
          <Modal.Title>New customer info: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label> First name: </Form.Label>
              <Form.Control
                type='text'
                name='firstname'
                onChange={handleChange}
                value={customer.firstname}
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label> Last name: </Form.Label>
              <Form.Control
                type='text'
                name='lastname'
                onChange={handleChange}
                value={customer.lastname}
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label> Street address: </Form.Label>
            <Form.Control
              type='text'
              name='streetaddress'
              onChange={handleChange}
              value={customer.streetaddress}
              required
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label> Post code: </Form.Label>
              <Form.Control
                type='text'
                name='postcode'
                onChange={handleChange}
                value={customer.postcode}
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label> City: </Form.Label>
              <Form.Control
                type='text'
                name='city'
                onChange={handleChange}
                value={customer.city}
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label> E-mail: </Form.Label>
            <Form.Control
              type='text'
              name='email'
              onChange={handleChange}
              value={customer.email}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Phone: </Form.Label>
            <Form.Control
              type='text'
              name='phone'
              onChange={handleChange}
              value={customer.phone}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCustomer;
