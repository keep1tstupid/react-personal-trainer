import React, {useEffect, useState} from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import { editCustomer } from "../../redux/actions";

import 'bootstrap/dist/css/bootstrap.min.css';


const EditCustomer = (props) => {
  const [buttonAvailable, setButtonAvailable] = useState(false);
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    if (props.selected !== null) {
      setButtonAvailable(true);
      setCustomer({
        firstname: props.selected.firstname,
        lastname: props.selected.lastname,
        streetaddress: props.selected.streetaddress,
        postcode: props.selected.postcode,
        city: props.selected.city,
        email: props.selected.email,
        phone: props.selected.phone,
        links: props.selected.links,
      });
    }
  }, [props]);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) => {
    setCustomer({...customer, [event.target.name]: event.target.value})
  }

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editCustomer(customer));
    handleClose();
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      handleEdit();
    }
    setValidated(true);
  };

  if (buttonAvailable) {
    return (
      <>
        <Button
          variant="light"
          className={'ml-3 mr-3'}
          onClick={handleShow}
        >
          Edit Selected Customer
        </Button>

        <Modal
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          show={show}
          onHide={handleClose}
        >
          <Modal.Header>
            <Modal.Title>Edit customer info: </Modal.Title>
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

              <Button type='submit'> Update </Button> {' '}
              <Button variant='outline-secondary' onClick={handleClose}> Cancel </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Button
        variant="light"
        className={'ml-3 mr-3'}
        disabled>
        Edit Selected Customer
      </Button>
    </>
  );
}

export default connect(
  state => {
    return { selected: state.customers.selected }
  }, { editCustomer }
)(EditCustomer);
