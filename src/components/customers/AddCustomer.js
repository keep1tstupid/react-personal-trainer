import React, { useState } from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import { useDispatch} from "react-redux";
import { addNewCustomer } from "../../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

// todo: figure out why data appears in url after saving customer

const AddCustomer = (props) => {
  const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    postcode: '',
    city: '',
    email: '',
    phone: '',
  }

  const [show, setShow] = useState(false);
  const [customer, setCustomer] = useState(INITIAL_STATE);

  // const reload = () => window.location.reload();

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
    // console.log(JSON.stringify(customer));
    dispatch(addNewCustomer(customer));
    handleClose();
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      // console.log("no");
    } else {
      handleSave();
    }
    setValidated(true);
  };

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
        onExit={handleClose}
      >
        <Modal.Header>
          <Modal.Title>New customer info: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
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
                <Form.Control.Feedback type="invalid">
                  This field can't be empty.
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  This field can't be empty.
                </Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">
                This field can't be empty.
              </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  This field can't be empty.
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  This field can't be empty.
                </Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">
                This field can't be empty.
              </Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">
                This field can't be empty.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type='submit'> Save </Button> {' '}
            <Button variant='outline-secondary' onClick={handleClose}> Cancel </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCustomer;